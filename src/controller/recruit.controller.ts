import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { RecruitDto } from '../model/dto/recruit.dto';
import { Recruit } from '../model/schema/recruit.schema';
import { RecruitService } from '../service/recruit.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.RECRUIT} controller`)
@Controller(`${CONSTANTS.DB.RECRUIT}s`)
export class RecruitController extends GenericController<Recruit, RecruitDto> {
  constructor(private readonly recruitService: RecruitService) {
    super(recruitService);
  }
}
