import { Router } from 'express';
import constants from '../constant/constant';
import meritPointController from '../controller/meritPoint.controller';

const root = `${constants.DB.MERIT_POINT}s`;
const meritPointRouter = Router();
meritPointRouter.get(`/${root}`, meritPointController.getAll);
meritPointRouter.get(`/${root}/:id`, meritPointController.getById);
meritPointRouter.post(`/${root}`, meritPointController.save);
meritPointRouter.put(`/${root}/:id`, meritPointController.update);
meritPointRouter.delete(`/${root}/:id`, meritPointController.delete);

export default meritPointRouter;
