import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FlagClientService } from '../service/flag-client.service';

@Injectable()
export class HeaderGuard implements CanActivate {
  constructor(
    private readonly cfgService: ConfigService,
    private readonly flagSvc: FlagClientService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const secEnabled: boolean = await this.flagSvc.getFlagValue(
      'DW1_SEC_ENABLED',
    );
    return (
      !secEnabled ||
      this.cfgService.get<string>('meta.appSecKey') ===
        request?.headers?.['x-api-key']
    );
  }
}
