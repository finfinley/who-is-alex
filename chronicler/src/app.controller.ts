import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpLoggingInterceptor } from './middleware/HttpLogging.interceptor';

@Controller()
@UseInterceptors(HttpLoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
