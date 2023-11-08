export interface Configuration {
  app: {
    clusterEnabled: boolean;
  };
  flagClient: {
    baseUrl: string;
    appSecKey: string;
  };
  http: {
    timeout: number;
  };
  meta: {
    appId: string;
    appName: string;
    appSecKey: string;
    env: string;
  };
  server: {
    dbUrl: string;
    port: number;
    throttleLimit: number;
    throttleTtl: number;
  };
}
