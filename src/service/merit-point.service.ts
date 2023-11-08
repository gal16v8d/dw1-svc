import { CONSTANTS } from '@app/const/dw1.const';
import { MeritPointDto } from '@app/model/dto/merit-point.dto';
import {
  MeritPoint,
  MeritPointDocument,
} from '@app/model/schema/merit-point.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
