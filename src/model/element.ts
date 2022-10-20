import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const elementSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const elementModel = model(
  constants.DB.ELEMENT,
  elementSchema,
  constants.DB.ELEMENT
);

export default elementModel;
