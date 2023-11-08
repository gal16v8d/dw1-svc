import { CONSTANTS } from '@app/const/dw1.const';
import { RecruitDto } from '@app/model/dto/recruit.dto';
import { Recruit } from '@app/model/schema/recruit.schema';
import { CacheService } from '@app/service/cache.service';
import { RecruitService } from '@app/service/recruit.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.RECRUIT} controller`)
@Controller(`${CONSTANTS.DB.RECRUIT}s`)
export class RecruitController extends GenericController<Recruit, RecruitDto> {
  constructor(
    readonly recruitService: RecruitService,
    readonly cacheService: CacheService,
  ) {
    super(recruitService, cacheService);
  }
}
