import { NameInputDto } from '@app/model/dto/name.input.dto';
import { Level, LevelDocument } from '@app/model/schema/level.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class LevelService extends GenericService<Level, NameInputDto> {
  constructor(
    @InjectModel(Level.name)
    readonly levelModel: Model<LevelDocument>,
  ) {
    super(levelModel);
  }
}
