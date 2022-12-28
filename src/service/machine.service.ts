import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CONSTANTS } from '../const/dw1.const';
import { MachineDto } from '../model/dto/machine.dto';
import { Machine, MachineDocument } from '../model/schema/machine.schema';
import { GenericService } from './generic.service';

@Injectable()
export class MachineService extends GenericService<Machine, MachineDto> {
  constructor(
    @InjectModel(Machine.name)
    readonly machineModel: Model<MachineDocument>,
  ) {
    super(machineModel, [
      {
        path: CONSTANTS.DB.LOCATION,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
