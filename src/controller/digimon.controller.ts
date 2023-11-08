import { CONSTANTS } from '@app/const/dw1.const';
import { DigimonDto } from '@app/model/dto/digimon.dto';
import { Digimon } from '@app/model/schema/digimon.schema';
import { CacheService } from '@app/service/cache.service';
import { DigimonService } from '@app/service/digimon.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.DIGIMON} controller`)
@Controller(`${CONSTANTS.DB.DIGIMON}s`)
export class DigimonController extends GenericController<Digimon, DigimonDto> {
  constructor(
    readonly digimonService: DigimonService,
    readonly cacheService: CacheService,
  ) {
    super(digimonService, cacheService);
  }
}
