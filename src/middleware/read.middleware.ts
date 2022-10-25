import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { CONSTANTS } from '../const/dw1.const';

@Injectable()
export class ReadMiddleware implements NestMiddleware {
  constructor(private readonly config: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const env = this.config.get<string>('meta.env');
    if (
      env === CONSTANTS.ENVIRONMENT.PROD &&
      req.method.toUpperCase() !== 'GET'
    ) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        message: `Unauthorized, API is just in read-only mode, 
      database is maintained by dev, so if you got a new
      info and wish to include it here, please submit an
      improvement jira issue`,
      });
    } else {
      next();
    }
  }
}
