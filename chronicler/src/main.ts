import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger()
  app.useGlobalPipes(new ValidationPipe());
  logger.log(`Welcome, ${process.env.MONGOOSE_USER}!`, 'Mongoose User' )
  await app.listen(3001);
}
bootstrap();
