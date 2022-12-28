import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { RestaurantFoodDto } from '../model/dto/restaurant-food.dto';
import { RestaurantFood } from '../model/schema/restaurant-food.schema';
import { RestaurantFoodService } from '../service/restaurant-food.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.RESTAURANT_FOOD} controller`)
@Controller(`${CONSTANTS.DB.RESTAURANT_FOOD}`)
export class RestaurantFoodController extends GenericController<
  RestaurantFood,
  RestaurantFoodDto
> {
  constructor(readonly restaurantFoodService: RestaurantFoodService) {
    super(restaurantFoodService);
  }
}
