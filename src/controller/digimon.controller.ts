import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { DigimonDto } from '../model/dto/digimon.dto';
import { Digimon } from '../model/schema/digimon.schema';
import { DigimonService } from '../service/digimon.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.DIGIMON} controller`)
@Controller(`${CONSTANTS.DB.DIGIMON}s`)
export class DigimonController extends GenericController<Digimon, DigimonDto> {
  constructor(readonly digimonService: DigimonService) {
    super(digimonService);
  }
}
