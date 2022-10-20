import constants from '../constant/constant';
import locationModel from '../model/location';
import GenericController from './generic.controller';

class LocationController extends GenericController {}

export default new LocationController(locationModel, constants.DB.LOCATION);
