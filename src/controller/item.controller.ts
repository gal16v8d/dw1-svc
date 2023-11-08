import { CONSTANTS } from '@app/const/dw1.const';
import { ItemDto } from '@app/model/dto/item.dto';
import { Item } from '@app/model/schema/item.schema';
import { CacheService } from '@app/service/cache.service';
import { ItemService } from '@app/service/item.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
