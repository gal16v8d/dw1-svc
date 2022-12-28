import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { GymMachineDto } from '../model/dto/gym-machine.dto';
import { GymMachine } from '../model/schema/gym-machine.schema';
import { GymMachineService } from '../service/gym-machine.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.GYM_MACHINE} controller`)
@Controller(`${CONSTANTS.DB.GYM_MACHINE}s`)
export class GymMachineController extends GenericController<
  GymMachine,
  GymMachineDto
> {
  constructor(readonly gymMachineService: GymMachineService) {
    super(gymMachineService);
  }
}
