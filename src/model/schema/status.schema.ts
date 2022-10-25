import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';

@Schema({ collection: CONSTANTS.DB.STATUS })
export class Status {
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: String, required: true })
  description: string;
}

export type StatusDocument = Status & Document;
export const StatusSchema = SchemaFactory.createForClass(Status);
