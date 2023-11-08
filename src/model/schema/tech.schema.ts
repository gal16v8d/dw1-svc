import { CONSTANTS } from '@app/const/dw1.const';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import RangEnum from '../enum/rang.enum';
import SpecEnum from '../enum/spec.enum';
import { Element } from './element.schema';

@Schema({ collection: CONSTANTS.DB.TECH })
export class Tech {
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: Number, required: false, enum: [1, 2, 3, 4, 5, 6, 7, 8] })
  number?: number;
  @Prop({ type: Number, required: true })
  power: number;
  @Prop({ type: Number, required: true })
  mp: number;
  @Prop({ type: String, required: false, enum: Object.values(RangEnum) })
  rang?: string;
  @Prop({ type: String, required: false, enum: Object.values(SpecEnum) })
  spec?: string;
  @Prop({ type: Types.ObjectId, required: false, ref: Element.name })
  element?: Element;
  @Prop({ type: Boolean, default: false, required: false })
  final?: boolean;
}

export type TechDocument = Tech & Document;
export const TechSchema = SchemaFactory.createForClass(Tech);
