import { CONSTANTS } from '@app/const/dw1.const';
import { MachineDto } from '@app/model/dto/machine.dto';
import { Machine } from '@app/model/schema/machine.schema';
import { CacheService } from '@app/service/cache.service';
import { MachineService } from '@app/service/machine.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.MACHINE} controller`)
@Controller(`${CONSTANTS.DB.MACHINE}s`)
export class MachineController extends GenericController<Machine, MachineDto> {
  constructor(
    readonly machineService: MachineService,
    readonly cacheService: CacheService,
  ) {
    super(machineService, cacheService);
  }
}
