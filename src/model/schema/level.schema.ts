import { CONSTANTS } from '@app/const/dw1.const';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: CONSTANTS.DB.LEVEL })
export class Level {
  @Prop({ type: String, required: true, unique: true })
  name: string;
}

export type LevelDocument = Level & Document;
export const LevelSchema = SchemaFactory.createForClass(Level);
