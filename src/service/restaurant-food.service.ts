import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RestaurantFoodDto } from '../model/dto/restaurant-food.dto';
import {
  RestaurantFood,
  RestaurantFoodDocument,
} from '../model/schema/restaurant-food.schema';
import { GenericService } from './generic.service';

@Injectable()
export class RestaurantFoodService extends GenericService<
  RestaurantFood,
  RestaurantFoodDto
> {
  constructor(
    @InjectModel(RestaurantFood.name)
    private readonly restaurantFoodModel: Model<RestaurantFoodDocument>,
  ) {
    super(restaurantFoodModel);
  }
}
