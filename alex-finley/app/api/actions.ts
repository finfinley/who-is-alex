'use server';

import axios from 'axios';
import { PET_NAMES } from '../components/Pet';
import { components } from './schema';

type CreateArchiveRequestBody = components['schemas']['CreateArchiveDto'];

type Result =
  | {
      success: true;
    }
  | {
      success: false;
      error: string;
    };

export async function createArchive(
  pet: PET_NAMES,
  formData: FormData,
): Promise<Result> {
  'use server';
  try {
    const reqBody: CreateArchiveRequestBody = {
      name: formData.get('name') as string,
      pet,
      email: formData.get('email') as string,
    };
    await axios.post(`http://localhost:3001/archives`, reqBody);
  } catch (err) {
    console.error({ err });
    return { success: false, error: 'Failed to sign guestbook ❤️‍🩹' };
  }

  return {
    success: true,
  };
}
