import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const cardSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  point: { type: Number, required: false },
  price: { type: Number, required: false },
  exchangeable: { type: Boolean, required: true },
});

const cardModel = model(constants.DB.CARD, cardSchema, constants.DB.CARD);

export default cardModel;
