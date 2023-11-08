import { CONSTANTS } from '@app/const/dw1.const';
import { ExchangeDto } from '@app/model/dto/exchange.dto';
import { Exchange } from '@app/model/schema/exchange.schema';
import { CacheService } from '@app/service/cache.service';
import { ExchangeService } from '@app/service/exchange.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
