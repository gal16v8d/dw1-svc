import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const levelSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const levelModel = model(constants.DB.LEVEL, levelSchema, constants.DB.LEVEL);

export default levelModel;
