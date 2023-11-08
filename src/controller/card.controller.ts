import { CONSTANTS } from '@app/const/dw1.const';
import { CardDto } from '@app/model/dto/card.dto';
import { Card } from '@app/model/schema/card.schema';
import { CacheService } from '@app/service/cache.service';
import { CardService } from '@app/service/card.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.CARD} controller`)
@Controller(`${CONSTANTS.DB.CARD}s`)
export class CardController extends GenericController<Card, CardDto> {
  constructor(
    readonly cardService: CardService,
    readonly cacheService: CacheService,
  ) {
    super(cardService, cacheService);
  }
}
