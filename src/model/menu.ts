import { model, Schema } from 'mongoose';
import constants from '../constant/constant';
import MenuTypeEnum from './types/menu.type.types';

const menuSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true, enum: Object.values(MenuTypeEnum) },
  description: { type: String, required: true },
});

const menuModel = model(constants.DB.MENU, menuSchema, constants.DB.MENU);

export default menuModel;
