import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { MeritPointDto } from '../model/dto/merit-point.dto';
import { MeritPoint } from '../model/schema/merit-point.schema';
import { CacheService } from '../service/cache.service';
import { MeritPointService } from '../service/merit-point.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.MERIT_POINT} controller`)
@Controller(`${CONSTANTS.DB.MERIT_POINT}s`)
export class MeritPointController extends GenericController<
  MeritPoint,
  MeritPointDto
> {
  constructor(
    readonly meritPointService: MeritPointService,
    readonly cacheService: CacheService,
  ) {
    super(meritPointService, cacheService);
  }
}
