import { ConfigFactory } from '@nestjs/config';
import { CONSTANTS } from '../const/dw1.const';
import { Configuration } from './config.interface';

const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;

const config: ConfigFactory<Configuration> = () => ({
  meta: {
    appName: process.env.APP_NAME ?? 'DW1 Service',
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
