import { CONSTANTS } from '@app/const/dw1.const';
import { RestaurantDto } from '@app/model/dto/restaurant.dto';
import { Restaurant } from '@app/model/schema/restaurant.schema';
import { CacheService } from '@app/service/cache.service';
import { RestaurantService } from '@app/service/restaurant.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
