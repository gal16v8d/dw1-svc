import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const recruitSchema = new Schema({
  digimon: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: constants.DB.DIGIMON,
    unique: true,
  },
  location: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: constants.DB.LOCATION,
    justOne: false,
  },
  job: { type: String, required: false },
  note: { type: String, required: false },
});

const recruitModel = model(
  constants.DB.RECRUIT,
  recruitSchema,
  constants.DB.RECRUIT
);

export default recruitModel;
