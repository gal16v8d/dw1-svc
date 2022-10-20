import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import techModel from '../model/tech';
import GenericController from './generic.controller';

class TechController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.ELEMENT,
    select: constants.ATTRIB.NAME,
  },
];

export default new TechController(techModel, constants.DB.TECH, populateOpts);
