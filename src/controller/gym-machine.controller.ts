import { CONSTANTS } from '@app/const/dw1.const';
import { GymMachineDto } from '@app/model/dto/gym-machine.dto';
import { GymMachine } from '@app/model/schema/gym-machine.schema';
import { CacheService } from '@app/service/cache.service';
import { GymMachineService } from '@app/service/gym-machine.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.GYM_MACHINE} controller`)
@Controller(`${CONSTANTS.DB.GYM_MACHINE}s`)
export class GymMachineController extends GenericController<
  GymMachine,
  GymMachineDto
> {
  constructor(
    readonly gymMachineService: GymMachineService,
    readonly cacheService: CacheService,
  ) {
    super(gymMachineService, cacheService);
  }
}
