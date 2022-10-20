import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import gymMachineModel from '../model/gymMachine';
import GenericController from './generic.controller';

class GymMachineController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.LOCATION,
    select: constants.ATTRIB.NAME,
  },
];

export default new GymMachineController(
  gymMachineModel,
  constants.DB.GYM_MACHINE,
  populateOpts
);
