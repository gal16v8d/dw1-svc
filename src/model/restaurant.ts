import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const restaurantSchema = new Schema({
  digimon: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: constants.DB.DIGIMON,
    unique: true,
  },
  restaurantFood: {
    type: [Schema.Types.ObjectId],
    required: false,
    ref: constants.DB.RESTAURANT_FOOD,
    justOne: false,
  },
});

const restaurantModel = model(
  constants.DB.RESTAURANT,
  restaurantSchema,
  constants.DB.RESTAURANT
);

export default restaurantModel;
