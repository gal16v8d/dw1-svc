export interface Configuration {
  meta: {
    appName: string;
    env: string;
  };
  server: {
    dbUrl: string;
    port: number;
    throttleLimit: number;
    throttleTtl: number;
  };
}
