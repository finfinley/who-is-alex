import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const logger = new Logger();
  app.useGlobalPipes(new ValidationPipe());
  logger.log(`Welcome, ${process.env.MONGOOSE_USER}!`, 'Mongoose User');

  // Set up Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Chronicler')
    .setDescription('Chronicler API')
    .setVersion('1.0')
    .addTag('chronicler')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
