import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CONSTANTS } from '../const/dw1.const';
import { TechDto } from '../model/dto/tech.dto';
import { Tech, TechDocument } from '../model/schema/tech.schema';
import { GenericService } from './generic.service';

@Injectable()
export class TechService extends GenericService<Tech, TechDto> {
  constructor(
    @InjectModel(Tech.name)
    private readonly techModel: Model<TechDocument>,
  ) {
    super(techModel, [
      {
        path: CONSTANTS.DB.ELEMENT,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
