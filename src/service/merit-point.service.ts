import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CONSTANTS } from '../const/dw1.const';
import { MeritPointDto } from '../model/dto/merit-point.dto';
import {
  MeritPoint,
  MeritPointDocument,
} from '../model/schema/merit-point.schema';
import { GenericService } from './generic.service';

@Injectable()
export class MeritPointService extends GenericService<
  MeritPoint,
  MeritPointDto
> {
  constructor(
    @InjectModel(MeritPoint.name)
    readonly meritPointModel: Model<MeritPointDocument>,
  ) {
    super(meritPointModel, [
      {
        path: CONSTANTS.DB.ITEM,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
