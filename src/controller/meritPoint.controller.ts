import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import meritPointModel from '../model/meritPoint';
import GenericController from './generic.controller';

class MeritPointController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.ITEM,
    select: constants.ATTRIB.NAME,
  },
];

export default new MeritPointController(
  meritPointModel,
  constants.DB.MERIT_POINT,
  populateOpts
);
