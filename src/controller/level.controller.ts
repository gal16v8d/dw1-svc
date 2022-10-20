import constants from '../constant/constant';
import levelModel from '../model/level';
import GenericController from './generic.controller';

class LevelController extends GenericController {}

export default new LevelController(levelModel, constants.DB.LEVEL);
