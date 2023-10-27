import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { ItemDto } from '../model/dto/item.dto';
import { Item } from '../model/schema/item.schema';
import { CacheService } from '../service/cache.service';
import { ItemService } from '../service/item.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.ITEM} controller`)
@Controller(`${CONSTANTS.DB.ITEM}s`)
export class ItemController extends GenericController<Item, ItemDto> {
  constructor(
    readonly itemService: ItemService,
    readonly cacheService: CacheService,
  ) {
    super(itemService, cacheService);
  }
}
