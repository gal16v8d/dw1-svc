import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';
import { Digimon } from './digimon.schema';
import { Location } from './location.schema';

@Schema({ collection: CONSTANTS.DB.RECRUIT })
export class Recruit {
  @Prop({
    type: Types.ObjectId,
    required: true,
    unique: true,
    ref: Digimon.name,
  })
  digimon: Digimon;
  @Prop({
    type: [Types.ObjectId],
    required: true,
    ref: Location.name,
    justOne: false,
  })
  location: Location[];
  @Prop({ type: String, required: false })
  job?: string;
  @Prop({ type: String, required: false })
  note?: string;
}

export type RecruitDocument = Recruit & Document;
export const RecruitSchema = SchemaFactory.createForClass(Recruit);
