import { Router } from 'express';
import constants from '../constant/constant';
import statusController from '../controller/status.controller';

const root = `${constants.DB.STATUS}`;
const statusRouter = Router();
statusRouter.get(`/${root}`, statusController.getAll);
statusRouter.get(`/${root}/:id`, statusController.getById);
statusRouter.post(`/${root}`, statusController.save);
statusRouter.put(`/${root}/:id`, statusController.update);
statusRouter.delete(`/${root}/:id`, statusController.delete);

export default statusRouter;
