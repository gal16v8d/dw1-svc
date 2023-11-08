import { CONSTANTS } from '@app/const/dw1.const';
import { TechDto } from '@app/model/dto/tech.dto';
import { Tech } from '@app/model/schema/tech.schema';
import { CacheService } from '@app/service/cache.service';
import { TechService } from '@app/service/tech.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.TECH} controller`)
@Controller(`${CONSTANTS.DB.TECH}s`)
export class TechController extends GenericController<Tech, TechDto> {
  constructor(
    readonly techService: TechService,
    readonly cacheService: CacheService,
  ) {
    super(techService, cacheService);
  }
}
