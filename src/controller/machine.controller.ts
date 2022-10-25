import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { MachineDto } from '../model/dto/machine.dto';
import { Machine } from '../model/schema/machine.schema';
import { MachineService } from '../service/machine.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.MACHINE} controller`)
@Controller(`${CONSTANTS.DB.MACHINE}s`)
export class MachineController extends GenericController<Machine, MachineDto> {
  constructor(private readonly machineService: MachineService) {
    super(machineService);
  }
}
