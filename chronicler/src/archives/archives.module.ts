import { Module } from '@nestjs/common';
import { ArchivesService } from './archives.service';
import { ArchivesController } from './archives.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Archive, ArchiveSchema } from './schemas/archive.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Archive.name,
        useFactory: () => {
          const schema = ArchiveSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [ArchivesController],
  providers: [ArchivesService],
})
export class ArchivesModule {}
