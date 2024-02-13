import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArchiveDocument = HydratedDocument<Archive>;

@Schema()
export class Archive {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  pet: 'Luna' | 'Dash';

  @Prop({ required: false })
  email: string;
}

export const ArchiveSchema = SchemaFactory.createForClass(Archive);