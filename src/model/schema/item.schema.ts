import { CONSTANTS } from '@app/const/dw1.const';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Location } from './location.schema';

@Schema({ collection: CONSTANTS.DB.ITEM })
export class Item {
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: [String], required: false })
  effect?: string[];
  @Prop({
    type: [Types.ObjectId],
    required: false,
    ref: Location.name,
    justOne: false,
  })
  location?: Location[];
  @Prop({ type: String, required: false })
  note?: string;
}

export type ItemDocument = Item & Document;
export const ItemSchema = SchemaFactory.createForClass(Item);
