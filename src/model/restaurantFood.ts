import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const restaurantFoodSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: false },
  effect: { type: [String], required: false },
});

const restaurantFoodModel = model(
  constants.DB.RESTAURANT_FOOD,
  restaurantFoodSchema,
  constants.DB.RESTAURANT_FOOD
);

export default restaurantFoodModel;
