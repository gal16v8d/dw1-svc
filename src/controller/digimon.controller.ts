import { PopulateOptions } from 'mongoose';
import constants from '../constant/constant';
import digimonModel from '../model/digimon';
import GenericController from './generic.controller';

class DigimonController extends GenericController {}

const populateOpts: PopulateOptions[] = [
  {
    path: constants.DB.LEVEL,
    select: constants.ATTRIB.NAME,
  },
  {
    path: `${constants.DB.TECH}Initial`,
    select: constants.ATTRIB.NAME,
  },
  {
    path: `${constants.DB.TECH}Final`,
    select: constants.ATTRIB.NAME,
  },
  {
    path: constants.DB.TECH,
    select: constants.ATTRIB.NAME,
  },
  {
    path: `${constants.DB.LOCATION}Happy`,
    select: constants.ATTRIB.NAME,
  },
  {
    path: `${constants.DB.LOCATION}Sad`,
    select: constants.ATTRIB.NAME,
  },
  {
    path: `${constants.DB.ITEM}Drop`,
    select: constants.ATTRIB.NAME,
  },
];

export default new DigimonController(
  digimonModel,
  constants.DB.DIGIMON,
  populateOpts
);
