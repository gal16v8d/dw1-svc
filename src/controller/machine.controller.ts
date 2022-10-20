import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import machineModel from '../model/machine';
import GenericController from './generic.controller';

class MachineController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.LOCATION,
    select: constants.ATTRIB.NAME,
  },
];

export default new MachineController(
  machineModel,
  constants.DB.MACHINE,
  populateOpts
);
