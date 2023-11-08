import { CONSTANTS } from '@app/const/dw1.const';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Location } from './location.schema';

@Schema({ collection: CONSTANTS.DB.MACHINE })
export class Machine {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: Location.name,
  })
  location: Location;
  @Prop({ type: [{ name: String, price: Number }], required: true })
  product: { name: string; price: number }[];
  @Prop({ type: Boolean, required: true, default: false })
  random?: boolean;
}

export type MachineDocument = Machine & Document;
export const MachineSchema = SchemaFactory.createForClass(Machine);
