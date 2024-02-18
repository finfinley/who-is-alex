'use server';

import axios from 'axios';
import { PET_NAMES } from '../components/Pet';
import { components } from './schema';

type CreateArchiveRequestBody = components['schemas']['CreateArchiveDto'];

export async function createArchive(pet: PET_NAMES, formData: FormData) {
  try {
    const reqBody: CreateArchiveRequestBody = {
      name: formData.get('name') as string,
      pet,
      email: formData.get('email') as string,
    };
    const res = await axios.post(`http://localhost:3001/archives`, reqBody);
    if (res.status === 201) {
      console.log('Archive added!');
    }
  } catch (err) {
    console.error({ err });
  }
}
