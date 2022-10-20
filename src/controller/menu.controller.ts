import constants from '../constant/constant';
import menuModel from '../model/menu';
import GenericController from './generic.controller';

class MenuController extends GenericController {}

export default new MenuController(menuModel, constants.DB.MENU);
