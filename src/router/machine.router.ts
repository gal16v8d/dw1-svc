import { Router } from 'express';
import constants from '../constant/constant';
import machineController from '../controller/machine.controller';

const root = `${constants.DB.MACHINE}s`;
const machineRouter = Router();
machineRouter.get(`/${root}`, machineController.getAll);
machineRouter.get(`/${root}/:id`, machineController.getById);
machineRouter.post(`/${root}`, machineController.save);
machineRouter.put(`/${root}/:id`, machineController.update);
machineRouter.delete(`/${root}/:id`, machineController.delete);

export default machineRouter;
