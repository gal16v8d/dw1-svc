import constants from '../constant/constant';
import medalModel from '../model/medal';
import GenericController from './generic.controller';

class MedalController extends GenericController {}

export default new MedalController(medalModel, constants.DB.MEDAL);
