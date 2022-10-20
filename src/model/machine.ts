import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const machineSchema = new Schema({
  location: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: constants.DB.LOCATION,
  },
  product: { type: [{ name: String, price: Number }], required: true },
  random: { type: Boolean, default: false, required: true },
});

const machineModel = model(
  constants.DB.MACHINE,
  machineSchema,
  constants.DB.MACHINE
);

export default machineModel;
