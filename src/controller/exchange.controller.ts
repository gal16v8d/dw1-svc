import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { ExchangeDto } from '../model/dto/exchange.dto';
import { Exchange } from '../model/schema/exchange.schema';
import { CacheService } from '../service/cache.service';
import { ExchangeService } from '../service/exchange.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.EXCHANGE} controller`)
@Controller(`${CONSTANTS.DB.EXCHANGE}s`)
export class ExchangeController extends GenericController<
  Exchange,
  ExchangeDto
> {
  constructor(
    readonly exchangeService: ExchangeService,
    readonly cacheService: CacheService,
  ) {
    super(exchangeService, cacheService);
  }
}
