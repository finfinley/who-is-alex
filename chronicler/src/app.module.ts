import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchivesModule } from './archives/archives.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@chronicle.8ircsqe.mongodb.net/chronicler?retryWrites=true&w=majority`,
    ),
    ArchivesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
