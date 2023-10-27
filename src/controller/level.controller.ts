import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { NameInputDto } from '../model/dto/name.input.dto';
import { Level } from '../model/schema/level.schema';
import { CacheService } from '../service/cache.service';
import { LevelService } from '../service/level.service';
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
