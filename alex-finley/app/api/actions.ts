'use server';

import axios, { isAxiosError } from 'axios';
import { z } from 'zod';
import { PET_NAMES } from '../components/Pet';
import { components } from './schema';

type CreateArchiveRequestBody = components['schemas']['CreateArchiveDto'];

type Result =
  | {
      success: true;
    }
  | {
      success: false;
      errors: string[];
    };

const PetEnum = z.enum(['luna', 'dash']);
type PetEnum = z.infer<typeof PetEnum>;

const DEFAULT_ERROR = 'Failed to sign guestbook ❤️‍🩹';

const ArchiveSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(2, 'Name must be at least 2 characters long.'),
  pet: PetEnum,
  email: z.string().optional(),
});

export async function createArchive(
  pet: PET_NAMES,
  formData: FormData,
): Promise<Result> {
  'use server';
  const reqBody: CreateArchiveRequestBody = {
    name: formData.get('name') as string,
    pet,
    email: (formData.get('email') as string) ?? null,
  };
  try {
    ArchiveSchema.parse(reqBody);

    await axios.post(
      `${process.env.NEXT_PUBLIC_CHRONICLER_URL}/archives`,
      reqBody,
    );
  } catch (err: any) {
    let errors = [DEFAULT_ERROR];
    if (isAxiosError(err)) {
      errors = [err.response?.data?.message ?? DEFAULT_ERROR];
    }

    if (err instanceof z.ZodError) {
      errors = [];
      err.issues.forEach((issue) => {
        errors.push(issue.message);
      });
    }

    console.error(err);
    return { success: false, errors };
  }

  return {
    success: true,
  };
}
