import { RestClientProvider } from '@app/provider/rest-client.provider';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as http from 'http';
import * as https from 'https';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (cfgService: ConfigService) => {
        return {
          timeout: cfgService.get<number>('http.timeout'),
          maxRedirects: cfgService.get<number>('http.maxRedirects'),
          httpAgent: new http.Agent({
            keepAlive: true,
            maxSockets: cfgService.get<number>('http.clientMaxSockets'),
            maxFreeSockets: cfgService.get<number>('http.clientFreeSockets'),
            timeout: cfgService.get<number>('http.clientTimeout'),
            keepAliveMsecs: cfgService.get<number>('http.clientKeepAlive'),
          }),
          httpSAgent: new https.Agent({
            keepAlive: true,
            maxSockets: cfgService.get<number>('http.clientMaxSockets'),
            maxFreeSockets: cfgService.get<number>('http.clientFreeSockets'),
            timeout: cfgService.get<number>('http.clientTimeout'),
            keepAliveMsecs: cfgService.get<number>('http.clientKeepAlive'),
          }),
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [RestClientProvider],
  providers: [RestClientProvider],
})
export class RestClientModule {}
