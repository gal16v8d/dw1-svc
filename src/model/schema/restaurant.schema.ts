import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';
import { Digimon } from './digimon.schema';
import { RestaurantFood } from './restaurant-food.schema';

@Schema({ collection: CONSTANTS.DB.RESTAURANT })
export class Restaurant {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: Digimon.name,
    unique: true,
  })
  digimon: Digimon;
  @Prop({
    type: [Types.ObjectId],
    required: true,
    ref: RestaurantFood.name,
    justOne: false,
  })
  restaurantFood: [RestaurantFood];
}

export type RestaurantDocument = Restaurant & Document;
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
