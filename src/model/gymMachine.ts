import { model, Schema } from 'mongoose';
import constants from '../constant/constant';
import ParameterEnum from './types/parameter.types';

const gymMachineSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: constants.DB.LOCATION,
  },
  train: {
    type: [String],
    required: true,
    enum: Object.values(ParameterEnum),
  },
});

const gymMachineModel = model(
  constants.DB.GYM_MACHINE,
  gymMachineSchema,
  constants.DB.GYM_MACHINE
);

export default gymMachineModel;
