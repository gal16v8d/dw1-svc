import { Router } from 'express';
import constants from '../constant/constant';
import gymMachineController from '../controller/gymMachine.controller';

const root = `${constants.DB.GYM_MACHINE}s`;
const gymMachineRouter = Router();
gymMachineRouter.get(`/${root}`, gymMachineController.getAll);
gymMachineRouter.get(`/${root}/:id`, gymMachineController.getById);
gymMachineRouter.post(`/${root}`, gymMachineController.save);
gymMachineRouter.put(`/${root}/:id`, gymMachineController.update);
gymMachineRouter.delete(`/${root}/:id`, gymMachineController.delete);

export default gymMachineRouter;
