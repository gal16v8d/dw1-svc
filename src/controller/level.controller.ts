import { CONSTANTS } from '@app/const/dw1.const';
import { NameInputDto } from '@app/model/dto/name.input.dto';
import { Level } from '@app/model/schema/level.schema';
import { CacheService } from '@app/service/cache.service';
import { LevelService } from '@app/service/level.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.LEVEL} controller`)
@Controller(`${CONSTANTS.DB.LEVEL}s`)
export class LevelController extends GenericController<Level, NameInputDto> {
  constructor(
    readonly levelService: LevelService,
    readonly cacheService: CacheService,
  ) {
    super(levelService, cacheService);
  }
}
