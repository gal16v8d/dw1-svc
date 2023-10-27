import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { NameInputDto } from '../model/dto/name.input.dto';
import { Element } from '../model/schema/element.schema';
import { CacheService } from '../service/cache.service';
import { ElementService } from '../service/element.service';
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
