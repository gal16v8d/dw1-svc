import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NameInputDto } from '../model/dto/name.input.dto';
import { Level, LevelDocument } from '../model/schema/level.schema';
import { GenericService } from './generic.service';

@Injectable()
export class LevelService extends GenericService<Level, NameInputDto> {
  constructor(
    @InjectModel(Level.name)
    private readonly levelModel: Model<LevelDocument>,
  ) {
    super(levelModel);
  }
}
