import { model, Schema } from 'mongoose';
import constants from '../constant/constant';
import { ActiveEnum, TypeEnum } from './types/digimon.types';

// TODO change required fields when I get more data in the game
const digimonSchema = new Schema({
  name: { type: String, required: true, unique: true },
  level: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: constants.DB.LEVEL,
  },
  type: { type: String, required: false, enum: Object.values(TypeEnum) },
  active: { type: String, required: false, enum: Object.values(ActiveEnum) },
  techInitial: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: constants.DB.TECH,
  },
  techFinal: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: constants.DB.TECH,
  },
  tech: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: constants.DB.TECH,
    justOne: false,
  },
  locationHappy: {
    type: [Schema.Types.ObjectId],
    required: false,
    ref: constants.DB.LOCATION,
    justOne: false,
  },
  locationSad: {
    type: [Schema.Types.ObjectId],
    required: false,
    ref: constants.DB.LOCATION,
    justOne: false,
  },
  raisable: { type: Boolean, default: false, required: true },
  recruitable: { type: Boolean, default: false, required: true },
  itemDrop: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: constants.DB.ITEM,
  },
});

const digimonModel = model(
  constants.DB.DIGIMON,
  digimonSchema,
  constants.DB.DIGIMON
);

export default digimonModel;
