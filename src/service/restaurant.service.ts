import { CONSTANTS } from '@app/const/dw1.const';
import { RestaurantDto } from '@app/model/dto/restaurant.dto';
import {
  Restaurant,
  RestaurantDocument,
} from '@app/model/schema/restaurant.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class RestaurantService extends GenericService<
  Restaurant,
  RestaurantDto
> {
  constructor(
    @InjectModel(Restaurant.name)
    readonly restaurantModel: Model<RestaurantDocument>,
  ) {
    super(restaurantModel, [
      {
        path: CONSTANTS.DB.DIGIMON,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: CONSTANTS.DB.RESTAURANT_FOOD,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
