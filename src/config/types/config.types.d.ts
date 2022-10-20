interface ServerProps {
  basePath: string;
  corsUri: string;
  db: string;
  limitMax: number;
  limitTime: number;
  port: number;
}

interface ConfigProps {
  environment: string;
  server: ServerProps;
  logLevel?: string;
}

export { ServerProps, ConfigProps };
