import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchivesModule } from './archives/archives.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://merlin:magic@chronicle.8ircsqe.mongodb.net/?retryWrites=true&w=majority',
    ),
    ArchivesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
