import { Router } from 'express';
import constants from '../constant/constant';
import medalController from '../controller/medal.controller';

const root = `${constants.DB.MEDAL}s`;
const medalRouter = Router();
medalRouter.get(`/${root}`, medalController.getAll);
medalRouter.get(`/${root}/:id`, medalController.getById);
medalRouter.post(`/${root}`, medalController.save);
medalRouter.put(`/${root}/:id`, medalController.update);
medalRouter.delete(`/${root}/:id`, medalController.delete);

export default medalRouter;
