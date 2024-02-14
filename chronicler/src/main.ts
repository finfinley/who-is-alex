import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  console.debug('Mongoose User: ', process.env.MONGOOSE_USER);
  await app.listen(3001);
}
bootstrap();
