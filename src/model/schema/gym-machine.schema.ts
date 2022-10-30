import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';
import ParameterEnum from '../enum/parameter.enum';
import { Location } from './location.schema';

@Schema({ collection: CONSTANTS.DB.GYM_MACHINE })
export class GymMachine {
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: Types.ObjectId, required: true, ref: Location.name })
  location: Location;
  @Prop({ type: [String], required: true, enum: Object.values(ParameterEnum) })
  train: string[];
}

export type GymMachineDocument = GymMachine & Document;
export const GymMachineSchema = SchemaFactory.createForClass(GymMachine);
