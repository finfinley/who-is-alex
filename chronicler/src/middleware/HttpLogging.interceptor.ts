import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const logger = new Logger(`${context.getClass().name}`);
    logger.log(`${context.switchToHttp().getRequest().method} Request Made`);
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          logger.log(
            `${context.switchToHttp().getRequest().method} response in ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
