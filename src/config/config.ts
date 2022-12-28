import { ConfigFactory } from '@nestjs/config';
import { CONSTANTS } from '../const/dw1.const';
import { Configuration } from './config.interface';

const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;

const config: ConfigFactory<Configuration> = () => ({
  flagClient: {
    baseUrl: process.env.FLAG_CLIENT_URL ?? '',
    appSecKey: process.env.FLAG_API_KEY ?? '',
  },
  http: {
    timeout: int(process.env.HTTP_TIME_OUT, 5000),
  },
  meta: {
    appId: process.env.DW1_APP_ID ?? '',
    appName: process.env.APP_NAME ?? 'DW1 Service',
    appSecKey: process.env.DW1_API_KEY ?? '',
    env: process.env.ENV ?? CONSTANTS.ENVIRONMENT.DEV,
  },
  server: {
    dbUrl: process.env.DB_DW1,
    port: int(process.env.PORT, 8100),
    throttleLimit: int(process.env.THROTTLE_LIMIT, 100),
    throttleTtl: int(process.env.THROTTLE_TTL, 60),
  },
});

export default config;
