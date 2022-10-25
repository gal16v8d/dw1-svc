import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';

@Schema({ collection: CONSTANTS.DB.ELEMENT })
export class Element {
  @Prop({ type: String, required: true, unique: true })
  name: string;
}

export type ElementDocument = Element & Document;
export const ElementSchema = SchemaFactory.createForClass(Element);
