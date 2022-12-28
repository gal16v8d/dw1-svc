import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { NameInputDto } from '../model/dto/name.input.dto';
import { Location } from '../model/schema/location.schema';
import { LocationService } from '../service/location.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.LOCATION} controller`)
@Controller(`${CONSTANTS.DB.LOCATION}s`)
export class LocationController extends GenericController<
  Location,
  NameInputDto
> {
  constructor(readonly locationService: LocationService) {
    super(locationService);
  }
}
