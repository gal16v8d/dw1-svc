import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuDto } from '../model/dto/menu.dto';
import { Menu, MenuDocument } from '../model/schema/menu.schema';
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
