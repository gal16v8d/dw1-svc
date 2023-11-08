import { CONSTANTS } from '@app/const/dw1.const';
import { MedalDto } from '@app/model/dto/medal.dto';
import { Medal } from '@app/model/schema/medal.schema';
import { CacheService } from '@app/service/cache.service';
import { MedalService } from '@app/service/medal.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.MEDAL} controller`)
@Controller(`${CONSTANTS.DB.MEDAL}s`)
export class MedalController extends GenericController<Medal, MedalDto> {
  constructor(
    readonly medalService: MedalService,
    readonly cacheService: CacheService,
  ) {
    super(medalService, cacheService);
  }
}
