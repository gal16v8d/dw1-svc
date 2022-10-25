import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';

@Schema({ collection: CONSTANTS.DB.MEDAL })
export class Medal {
  @Prop({ type: Number, required: true, unique: true })
  number: number;
  @Prop({ type: String, required: true, unique: true })
  product: string;
  @Prop({ type: String, required: true })
  description: string;
}

export type MedalDocument = Medal & Document;
export const MedalSchema = SchemaFactory.createForClass(Medal);
