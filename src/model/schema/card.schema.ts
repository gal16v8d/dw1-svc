import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';

@Schema({ collection: CONSTANTS.DB.CARD })
export class Card {
  @Prop({ type: Number, required: true, unique: true })
  number: number;
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: Number, required: false })
  point?: number;
  @Prop({ type: Number, required: false })
  price?: number;
  @Prop({ type: Boolean, required: true })
  exchangeable: boolean;
}

export type CardDocument = Card & Document;
export const CardSchema = SchemaFactory.createForClass(Card);
