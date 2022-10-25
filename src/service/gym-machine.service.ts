import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CONSTANTS } from '../const/dw1.const';
import { GymMachineDto } from '../model/dto/gym-machine.dto';
import {
  GymMachine,
  GymMachineDocument,
} from '../model/schema/gym-machine.schema';
import { GenericService } from './generic.service';

@Injectable()
export class GymMachineService extends GenericService<
  GymMachine,
  GymMachineDto
> {
  constructor(
    @InjectModel(GymMachine.name)
    private readonly gymMachineModel: Model<GymMachineDocument>,
  ) {
    super(gymMachineModel, [
      {
        path: CONSTANTS.DB.LOCATION,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
