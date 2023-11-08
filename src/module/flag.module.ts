import { RestClientProvider } from '@app/provider/rest-client.provider';
import { RestUtil } from '@app/provider/rest-util.provider';
import { FlagClientService } from '@app/service/flag-client.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
