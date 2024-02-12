import { Injectable } from '@nestjs/common';
import { CreateArchiveDto } from './dto/create-archive.dto';
import { UpdateArchiveDto } from './dto/update-archive.dto';
import { Archive } from './schemas/archive.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArchivesService {
  constructor(@InjectModel(Archive.name) private archiveModel) {}

  create(createArchiveDto: CreateArchiveDto) {
    const createdArchive = new this.archiveModel({
      email: 'merlin@magic.com',
      name: 'Merlin',
      pet: 'Dash',
    });
    return createdArchive.save();
  }

  findAll() {
    return this.archiveModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} archive`;
  }

  update(id: number, updateArchiveDto: UpdateArchiveDto) {
    return `This action updates a #${id} archive`;
  }

  remove(id: number) {
    return `This action removes a #${id} archive`;
  }
}
