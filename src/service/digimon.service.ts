import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CONSTANTS } from '../const/dw1.const';
import { DigimonDto } from '../model/dto/digimon.dto';
import { Digimon, DigimonDocument } from '../model/schema/digimon.schema';
import { GenericService } from './generic.service';

@Injectable()
export class DigimonService extends GenericService<Digimon, DigimonDto> {
  constructor(
    @InjectModel(Digimon.name)
    private readonly digimonModel: Model<DigimonDocument>,
  ) {
    super(digimonModel, [
      {
        path: CONSTANTS.DB.LEVEL,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: `${CONSTANTS.DB.TECH}Initial`,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: `${CONSTANTS.DB.TECH}Final`,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: CONSTANTS.DB.TECH,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: `${CONSTANTS.DB.LOCATION}Happy`,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: `${CONSTANTS.DB.LOCATION}Sad`,
        select: CONSTANTS.ATTRIB.NAME,
      },
      {
        path: `${CONSTANTS.DB.ITEM}Drop`,
        select: CONSTANTS.ATTRIB.NAME,
      },
    ]);
  }
}
