import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import restaurantModel from '../model/restaurant';
import GenericController from './generic.controller';

class RestaurantController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.DIGIMON,
    select: constants.ATTRIB.NAME,
  },
  {
    path: constants.DB.RESTAURANT_FOOD,
    select: constants.ATTRIB.NAME,
  },
];

export default new RestaurantController(
  restaurantModel,
  constants.DB.RESTAURANT,
  populateOpts
);
