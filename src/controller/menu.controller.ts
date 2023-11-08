import { CONSTANTS } from '@app/const/dw1.const';
import { MenuDto } from '@app/model/dto/menu.dto';
import { Menu } from '@app/model/schema/menu.schema';
import { CacheService } from '@app/service/cache.service';
import { MenuService } from '@app/service/menu.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.MENU} controller`)
@Controller(`${CONSTANTS.DB.MENU}s`)
export class MenuController extends GenericController<Menu, MenuDto> {
  constructor(
    readonly menuService: MenuService,
    readonly cacheService: CacheService,
  ) {
    super(menuService, cacheService);
  }
}
