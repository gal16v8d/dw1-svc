import { CONSTANTS } from '@app/const/dw1.const';
import { MeritPointDto } from '@app/model/dto/merit-point.dto';
import { MeritPoint } from '@app/model/schema/merit-point.schema';
import { CacheService } from '@app/service/cache.service';
import { MeritPointService } from '@app/service/merit-point.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
