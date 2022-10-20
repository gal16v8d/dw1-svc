import constants from '../constant/constant';
import restaurantFoodModel from '../model/restaurantFood';
import GenericController from './generic.controller';

class RestaurantFoodController extends GenericController {}

export default new RestaurantFoodController(
  restaurantFoodModel,
  constants.DB.RESTAURANT_FOOD
);
