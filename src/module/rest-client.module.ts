import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RestClientProvider } from '../provider/rest-client.provider';

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
  controllers: [RestClientProvider],
  providers: [RestClientProvider],
})
export class RestClientModule {}
