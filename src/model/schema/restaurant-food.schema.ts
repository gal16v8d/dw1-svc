import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';

@Schema({ collection: CONSTANTS.DB.RESTAURANT_FOOD })
export class RestaurantFood {
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: Number, required: true })
  price: number;
  @Prop({ type: [String], required: true })
  effect: [string];
}

export type RestaurantFoodDocument = RestaurantFood & Document;
export const RestaurantFoodSchema =
  SchemaFactory.createForClass(RestaurantFood);
