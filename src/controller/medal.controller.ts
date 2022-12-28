import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { MedalDto } from '../model/dto/medal.dto';
import { Medal } from '../model/schema/medal.schema';
import { MedalService } from '../service/medal.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.MEDAL} controller`)
@Controller(`${CONSTANTS.DB.MEDAL}s`)
export class MedalController extends GenericController<Medal, MedalDto> {
  constructor(readonly medalService: MedalService) {
    super(medalService);
  }
}
