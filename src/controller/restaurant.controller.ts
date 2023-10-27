import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { RestaurantDto } from '../model/dto/restaurant.dto';
import { Restaurant } from '../model/schema/restaurant.schema';
import { CacheService } from '../service/cache.service';
import { RestaurantService } from '../service/restaurant.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.RESTAURANT} controller`)
@Controller(`${CONSTANTS.DB.RESTAURANT}s`)
export class RestaurantController extends GenericController<
  Restaurant,
  RestaurantDto
> {
  constructor(
    readonly restaurantService: RestaurantService,
    readonly cacheService: CacheService,
  ) {
    super(restaurantService, cacheService);
  }
}
