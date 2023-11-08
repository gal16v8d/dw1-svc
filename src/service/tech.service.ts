import { CONSTANTS } from '@app/const/dw1.const';
import { TechDto } from '@app/model/dto/tech.dto';
import { Tech, TechDocument } from '@app/model/schema/tech.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class TechService extends GenericService<Tech, TechDto> {
  constructor(
    @InjectModel(Tech.name)
    readonly techModel: Model<TechDocument>,
  ) {
    super(techModel, [
      {
        path: CONSTANTS.DB.ELEMENT,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
