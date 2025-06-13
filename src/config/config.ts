import { ConfigFactory } from '@nestjs/config';
import { CONSTANTS } from '../const/dw1.const';
import { Configuration } from './config.interface';

const toInt = (val: string, defaultValue: number): number =>
  isNaN(parseInt(val)) ? defaultValue : parseInt(val);

const int = (val: string | undefined, defaultValue: number): number =>
  val ? toInt(val, defaultValue) : defaultValue;

const config: ConfigFactory<Configuration> = () => ({
  app: {
    clusterEnabled: process.env.CLUSTER_ENABLED
      ? Boolean(process.env.CLUSTER_ENABLED)
      : false,
  },
  flagClient: {
    baseUrl: process.env.FLAG_CLIENT_URL ?? '',
    appSecKey: process.env.FLAG_API_KEY ?? '',
  },
  http: {
    maxRedirects: int(process.env.MAX_REDIRECTS, 3),
    timeout: int(process.env.HTTP_TIME_OUT, 5000),
    clientTimeout: int(process.env.CLIENT_TIME_OUT, 60000),
    clientKeepAlive: int(process.env.CLIENT_KEEP_ALIVE, 30000),
    clientMaxSockets: int(process.env.CLIENT_MAX_SOCKETS, 20),
    clientFreeSockets: int(process.env.CLIENT_FREE_SOCKETS, 10),
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
