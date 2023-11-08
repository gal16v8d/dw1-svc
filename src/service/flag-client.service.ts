import { RestClientProvider } from '@app/provider/rest-client.provider';
import { RestUtil } from '@app/provider/rest-util.provider';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FlagClientService {
  private flagSvcBaseUrl: string;

  constructor(
    private configService: ConfigService,
    private restUtil: RestUtil,
    private restClientProvider: RestClientProvider,
  ) {
    this.flagSvcBaseUrl = this.configService.get<string>('flagClient.baseUrl');
  }

  async getFlagValue(flagName: string): Promise<boolean> {
    return await this.restClientProvider
      .get(
        'flag-svc',
        this.restUtil.appendQueryParams(`${this.flagSvcBaseUrl}/flags`, {
          appId: this.configService.get<string>('meta.appId'),
          name: flagName,
        }),
        { 'x-api-key': this.configService.get<string>('flagClient.appSecKey') },
      )
      .then((v) => v?.data?.value)
      .catch(() => false);
  }
}
