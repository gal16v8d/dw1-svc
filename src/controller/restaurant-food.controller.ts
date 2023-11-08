import { CONSTANTS } from '@app/const/dw1.const';
import { RestaurantFoodDto } from '@app/model/dto/restaurant-food.dto';
import { RestaurantFood } from '@app/model/schema/restaurant-food.schema';
import { CacheService } from '@app/service/cache.service';
import { RestaurantFoodService } from '@app/service/restaurant-food.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.RESTAURANT_FOOD} controller`)
@Controller(`${CONSTANTS.DB.RESTAURANT_FOOD}`)
export class RestaurantFoodController extends GenericController<
  RestaurantFood,
  RestaurantFoodDto
> {
  constructor(
    readonly restaurantFoodService: RestaurantFoodService,
    readonly cacheService: CacheService,
  ) {
    super(restaurantFoodService, cacheService);
  }
}
