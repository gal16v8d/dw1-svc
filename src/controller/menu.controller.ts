import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { MenuDto } from '../model/dto/menu.dto';
import { Menu } from '../model/schema/menu.schema';
import { MenuService } from '../service/menu.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.MENU} controller`)
@Controller(`${CONSTANTS.DB.MENU}s`)
export class MenuController extends GenericController<Menu, MenuDto> {
  constructor(private readonly menuService: MenuService) {
    super(menuService);
  }
}
