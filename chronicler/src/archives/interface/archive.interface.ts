import { Document } from 'mongoose';

export interface IArchive extends Document {
  readonly name: string;
  readonly pet: 'luna' | 'dash';
  readonly email?: string;
  readonly date: string;
}
