import { CONSTANTS } from '@app/const/dw1.const';
import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  private readonly logger = new Logger(RequestMiddleware.name);

  constructor(private readonly config: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const env = this.config.get<string>('meta.env');

    const startTime = Date.now();

    this.logger.debug('incoming request', {
      http_method: req.method,
      http_version: req.httpVersion,
      ip: req.ip,
      url: req.originalUrl,
    });

    if (
      env === CONSTANTS.ENVIRONMENT.PROD &&
      req.method.toUpperCase() !== 'GET'
    ) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        message: `Unauthorized, API is just in read-only mode, 
      database is maintained by dev, so if you got a new
      info and wish to include it here, please create an issue`,
      });
    } else {
      next();
    }

    res.on('close', () => {
      const endTime = Date.now() - startTime;
      this.logger.debug('request completed', {
        duration: endTime,
        http_method: req.method,
        http_status: res.statusCode,
        http_version: req.httpVersion,
        ip: req.ip,
        url: req.originalUrl,
      });
    });
  }
}
