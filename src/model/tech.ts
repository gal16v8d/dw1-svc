import { model, Schema } from 'mongoose';
import constants from '../constant/constant';
import RangEnum from './types/rang.types';
import SpecEnum from './types/spec.types';

const techSchema = new Schema({
  number: { type: Number, required: false, enum: [1, 2, 3, 4, 5, 6, 7, 8] },
  name: { type: String, required: true, unique: true },
  power: { type: Number, required: true },
  mp: { type: Number, required: true },
  rang: { type: String, required: false, enum: Object.values(RangEnum) },
  spec: {
    type: String,
    required: false,
    enum: Object.values(SpecEnum),
  },
  element: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: constants.DB.ELEMENT,
  },
  final: { type: Boolean, default: false, required: false },
});

const techModel = model(constants.DB.TECH, techSchema, constants.DB.TECH);

export default techModel;
