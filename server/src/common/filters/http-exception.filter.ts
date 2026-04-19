import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let error: any = exception.message || 'Server Error';

    if (exception instanceof HttpException) {
      const exceptionResponse: any = exception.getResponse();
      if (typeof exceptionResponse === 'object' && exceptionResponse.message) {
        // Handle ValidationPipe response
        error = exceptionResponse.message;
      } else {
        error = exceptionResponse;
      }
    } else {
      error = 'Server Error';
    }

    // Special cases to match old API strings
    if (error === 'No transaction found' || exception.status === 404) {
      status = 404;
      error = 'No transaction found';
    }

    response.status(status).json({
      success: false,
      error: error,
    });
  }
}
