import cardModel from '../model/card';
import constants from '../constant/constant';
import GenericController from './generic.controller';

class CardController extends GenericController {}

export default new CardController(cardModel, constants.DB.CARD);
