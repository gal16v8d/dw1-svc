import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import itemModel from '../model/item';
import GenericController from './generic.controller';

class ItemController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.LOCATION,
    select: constants.ATTRIB.NAME,
  },
];

export default new ItemController(itemModel, constants.DB.ITEM, populateOpts);
