import { CONSTANTS } from '@app/const/dw1.const';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: CONSTANTS.DB.EXCHANGE })
export class Exchange {
  @Prop({ type: String, required: true })
  base: string;
  @Prop({ type: String, required: true })
  result: string;
  @Prop({ type: String, required: true })
  who: string;
}

export type ExchangeDocument = Exchange & Document;
export const exchangeSchema = SchemaFactory.createForClass(Exchange);
