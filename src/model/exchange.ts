import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const exchangeSchema = new Schema({
  base: { type: String, required: true },
  result: { type: String, required: true },
  who: { type: String, required: true },
});

const exchangeModel = model(
  constants.DB.EXCHANGE,
  exchangeSchema,
  constants.DB.EXCHANGE
);

export default exchangeModel;
