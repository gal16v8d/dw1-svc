import { CONSTANTS } from '@app/const/dw1.const';
import { ItemDto } from '@app/model/dto/item.dto';
import { Item, ItemDocument } from '@app/model/schema/item.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class ItemService extends GenericService<Item, ItemDto> {
  constructor(
    @InjectModel(Item.name)
    readonly itemModel: Model<ItemDocument>,
  ) {
    super(itemModel, [
      {
        path: CONSTANTS.DB.LOCATION,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
