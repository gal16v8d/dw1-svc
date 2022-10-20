import npmlog from 'npmlog';
import config from './config/app.config';
import constants from './constant/constant';
import server from './server';
import { connectDB } from './db/db';

void connectDB();

server.listen(config.server.port, () =>
  npmlog.info(
    constants.LOG.ROOT,
    `Service is running on ${config.server.port} port`
  )
);
