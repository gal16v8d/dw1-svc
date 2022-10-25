import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'src/model/schema/item.schema';
import { CONSTANTS } from '../const/dw1.const';
import { ItemDto } from '../model/dto/item.dto';
import { GenericService } from './generic.service';

@Injectable()
export class ItemService extends GenericService<Item, ItemDto> {
  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<ItemDocument>,
  ) {
    super(itemModel, [
      {
        path: CONSTANTS.DB.LOCATION,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
