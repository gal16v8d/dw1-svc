import elementModel from '../model/element';
import constants from '../constant/constant';
import GenericController from './generic.controller';

class ElementController extends GenericController {}

export default new ElementController(elementModel, constants.DB.ELEMENT);
