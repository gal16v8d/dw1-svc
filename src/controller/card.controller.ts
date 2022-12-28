import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { CardDto } from '../model/dto/card.dto';
import { Card } from '../model/schema/card.schema';
import { CardService } from '../service/card.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.CARD} controller`)
@Controller(`${CONSTANTS.DB.CARD}s`)
export class CardController extends GenericController<Card, CardDto> {
  constructor(readonly cardService: CardService) {
    super(cardService);
  }
}
