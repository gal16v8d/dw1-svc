import { RestaurantFoodDto } from '@app/model/dto/restaurant-food.dto';
import {
  RestaurantFood,
  RestaurantFoodDocument,
} from '@app/model/schema/restaurant-food.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class RestaurantFoodService extends GenericService<
  RestaurantFood,
  RestaurantFoodDto
> {
  constructor(
    @InjectModel(RestaurantFood.name)
    readonly restaurantFoodModel: Model<RestaurantFoodDocument>,
  ) {
    super(restaurantFoodModel);
  }
}
