import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const itemSchema = new Schema({
  name: { type: String, required: true, unique: true },
  effect: { type: [String], required: false },
  location: {
    type: [Schema.Types.ObjectId],
    required: false,
    ref: constants.DB.LOCATION,
    justOne: false,
  },
  note: { type: String, required: false },
});

const itemModel = model(constants.DB.ITEM, itemSchema, constants.DB.ITEM);

export default itemModel;
