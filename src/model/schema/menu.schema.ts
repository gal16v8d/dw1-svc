import { CONSTANTS } from '@app/const/dw1.const';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import MenuTypeEnum from '../enum/menu-type.enum';

@Schema({ collection: CONSTANTS.DB.MENU })
export class Menu {
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: String, required: true, enum: Object.values(MenuTypeEnum) })
  type: string;
  @Prop({ type: String, required: true })
  description: string;
}

export type MenuDocument = Menu & Document;
export const MenuSchema = SchemaFactory.createForClass(Menu);
