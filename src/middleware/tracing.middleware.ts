import { RequestHandler } from 'express';
import npmlog from 'npmlog';
import constants from '../constant/constant';

const tracingMiddleWare: RequestHandler = (req, res, next) => {
  npmlog.info(
    constants.LOG.TRACING,
    `
      METHOD - [${req.method}]
      URL    - [${req.url}] 
      IP     - [${req.socket.remoteAddress}]
    `
  );

  res.on('finish', () => {
    npmlog.info(
      constants.LOG.TRACING,
      `
        METHOD - [${req.method}] 
        URL    - [${req.url}]
        IP     - [${req.socket.remoteAddress}] 
        STATUS - [${res.statusCode}]
      `
    );
  });

  next();
};

export default tracingMiddleWare;
