import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';
import { Item } from './item.schema';

@Schema({ collection: CONSTANTS.DB.MERIT_POINT })
export class MeritPoint {
  @Prop({ type: Number, required: true })
  point: number;
  @Prop({ type: Types.ObjectId, required: true, ref: Item.name })
  item: Item;
}

export type MeritPointDocument = MeritPoint & Document;
export const MeritPointSchema = SchemaFactory.createForClass(MeritPoint);
