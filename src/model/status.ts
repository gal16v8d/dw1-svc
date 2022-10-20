import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const statusSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

const statusModel = model(
  constants.DB.STATUS,
  statusSchema,
  constants.DB.STATUS
);

export default statusModel;
