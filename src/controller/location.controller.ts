import { CONSTANTS } from '@app/const/dw1.const';
import { NameInputDto } from '@app/model/dto/name.input.dto';
import { Location } from '@app/model/schema/location.schema';
import { CacheService } from '@app/service/cache.service';
import { LocationService } from '@app/service/location.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.LOCATION} controller`)
@Controller(`${CONSTANTS.DB.LOCATION}s`)
export class LocationController extends GenericController<
  Location,
  NameInputDto
> {
  constructor(
    readonly locationService: LocationService,
    readonly cacheService: CacheService,
  ) {
    super(locationService, cacheService);
  }
}
