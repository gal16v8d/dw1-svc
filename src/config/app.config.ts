import dotenv from 'dotenv';
import constants from '../constant/constant';
import { ConfigProps, ServerProps } from './types/config.types';

const env = process.env.NODE_ENV || constants.ENVIRONMENT.DEV;
dotenv.config();

const server: ServerProps = {
  basePath: process.env.BASE_PATH || 'dw1/api',
  corsUri: process.env.CORS_URI || '',
  db: process.env.DB_DW1 || '',
  limitMax: parseInt(process.env.LIMIT_MAX || '100'),
  limitTime: parseInt(process.env.LIMIT_TIME || '60000'),
  port: parseInt(process.env.PORT || '8100'),
};

const config: ConfigProps = {
  environment: env,
  server,
  logLevel: process.env.LOG_LEVEL || 'info',
};

export default config;
