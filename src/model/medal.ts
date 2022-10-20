import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const medalSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

const medalModel = model(constants.DB.MEDAL, medalSchema, constants.DB.MEDAL);

export default medalModel;
