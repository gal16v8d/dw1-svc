import { MedalDto } from '@app/model/dto/medal.dto';
import { Medal, MedalDocument } from '@app/model/schema/medal.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class MedalService extends GenericService<Medal, MedalDto> {
  constructor(
    @InjectModel(Medal.name)
    readonly medalModel: Model<MedalDocument>,
  ) {
    super(medalModel);
  }
}
