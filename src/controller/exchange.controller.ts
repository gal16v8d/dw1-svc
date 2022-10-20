import exchangeModel from '../model/exchange';
import constants from '../constant/constant';
import GenericController from './generic.controller';

class ExchangeController extends GenericController {}

export default new ExchangeController(exchangeModel, constants.DB.EXCHANGE);
