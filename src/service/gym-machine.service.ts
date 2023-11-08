import { CONSTANTS } from '@app/const/dw1.const';
import { GymMachineDto } from '@app/model/dto/gym-machine.dto';
import {
  GymMachine,
  GymMachineDocument,
} from '@app/model/schema/gym-machine.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class GymMachineService extends GenericService<
  GymMachine,
  GymMachineDto
> {
  constructor(
    @InjectModel(GymMachine.name)
    readonly gymMachineModel: Model<GymMachineDocument>,
  ) {
    super(gymMachineModel, [
      {
        path: CONSTANTS.DB.LOCATION,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
