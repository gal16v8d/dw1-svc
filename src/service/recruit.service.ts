import { CONSTANTS } from '@app/const/dw1.const';
import { RecruitDto } from '@app/model/dto/recruit.dto';
import { Recruit, RecruitDocument } from '@app/model/schema/recruit.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class RecruitService extends GenericService<Recruit, RecruitDto> {
  constructor(
    @InjectModel(Recruit.name)
    readonly recruitModel: Model<RecruitDocument>,
  ) {
    super(recruitModel, [
      {
        path: CONSTANTS.DB.DIGIMON,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: CONSTANTS.DB.LOCATION,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
