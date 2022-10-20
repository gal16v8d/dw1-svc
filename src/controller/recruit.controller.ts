import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import recruitModel from '../model/recruit';
import GenericController from './generic.controller';

class RecruitController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.DIGIMON,
    select: constants.ATTRIB.NAME,
  },
  {
    path: constants.DB.LOCATION,
    select: constants.ATTRIB.NAME,
  },
];

export default new RecruitController(
  recruitModel,
  constants.DB.RECRUIT,
  populateOpts
);
