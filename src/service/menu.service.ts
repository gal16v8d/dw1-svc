import { MenuDto } from '@app/model/dto/menu.dto';
import { Menu, MenuDocument } from '@app/model/schema/menu.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class MenuService extends GenericService<Menu, MenuDto> {
  constructor(
    @InjectModel(Menu.name)
    readonly menuModel: Model<MenuDocument>,
  ) {
    super(menuModel);
  }
}
