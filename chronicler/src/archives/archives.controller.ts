import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { ArchivesService } from './archives.service';
import { CreateArchiveDto } from './dto/create-archive.dto';
import { UpdateArchiveDto } from './dto/update-archive.dto';
import { HttpLoggingInterceptor } from 'src/middleware/HttpLogging.interceptor';

@Controller('archives')
@UseInterceptors(HttpLoggingInterceptor)
export class ArchivesController {
  constructor(private readonly archivesService: ArchivesService) {}

  @Post()
  async create(@Res() response, @Body() createArchiveDto: CreateArchiveDto) {
    try {
      const newArchive = await this.archivesService.create(createArchiveDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'New archive has been stored 📖',
        newArchive,
      });
    } catch (err) {
      console.error({ err });
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Tis but a scratch: Archive has not been stored.',
        error: err.error
      });
    }
  }

  @Get()
  findAll() {
    return this.archivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.archivesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArchiveDto: UpdateArchiveDto) {
    return this.archivesService.update(+id, updateArchiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.archivesService.remove(+id);
  }
}
