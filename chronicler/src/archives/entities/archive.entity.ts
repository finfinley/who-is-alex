import { ApiProperty } from '@nestjs/swagger';

enum PetEnum {
  LUNA = 'luna',
  DASH = 'dash',
}

export class StoredArchive {
  _id: string;

  name: string;

  pet: PetEnum;

  date: string;

  email?: string;
}
