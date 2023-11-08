import { CONSTANTS } from '@app/const/dw1.const';
import { NameInputDto } from '@app/model/dto/name.input.dto';
import { Element } from '@app/model/schema/element.schema';
import { CacheService } from '@app/service/cache.service';
import { ElementService } from '@app/service/element.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.ELEMENT} controller`)
@Controller(`${CONSTANTS.DB.ELEMENT}s`)
export class ElementController extends GenericController<
  Element,
  NameInputDto
> {
  constructor(
    readonly elementService: ElementService,
    readonly cacheService: CacheService,
  ) {
    super(elementService, cacheService);
  }
}
