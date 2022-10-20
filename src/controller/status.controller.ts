import constants from '../constant/constant';
import statusModel from '../model/status';
import GenericController from './generic.controller';

class StatusController extends GenericController {}

export default new StatusController(statusModel, constants.DB.STATUS);
