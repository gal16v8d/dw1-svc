import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const locationSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const locationModel = model(
  constants.DB.LOCATION,
  locationSchema,
  constants.DB.LOCATION
);

export default locationModel;
