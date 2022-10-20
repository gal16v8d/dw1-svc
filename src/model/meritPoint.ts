import { model, Schema } from 'mongoose';
import constants from '../constant/constant';

const meritPointSchema = new Schema({
  point: { type: Number, required: true },
  item: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: constants.DB.ITEM,
  },
});

const meritPointModel = model(
  constants.DB.MERIT_POINT,
  meritPointSchema,
  constants.DB.MERIT_POINT
);

export default meritPointModel;
