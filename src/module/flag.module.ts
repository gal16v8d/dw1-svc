import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RestClientProvider } from '../provider/rest-client.provider';
import { RestUtil } from '../provider/rest-util.provider';
import { FlagClientService } from '../service/flag-client.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (cfgService: ConfigService) => {
        return {
          timeout: cfgService.get<number>('http.timeout'),
          maxRedirects: 3,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService, RestUtil, RestClientProvider, FlagClientService],
  exports: [FlagClientService],
})
export class FlagServiceModule {}
