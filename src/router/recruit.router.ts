import { Router } from 'express';
import constants from '../constant/constant';
import recruitController from '../controller/recruit.controller';

const root = `${constants.DB.RECRUIT}s`;
const recruitRouter = Router();
recruitRouter.get(`/${root}`, recruitController.getAll);
recruitRouter.get(`/${root}/:id`, recruitController.getById);
recruitRouter.post(`/${root}`, recruitController.save);
recruitRouter.put(`/${root}/:id`, recruitController.update);
recruitRouter.delete(`/${root}/:id`, recruitController.delete);

export default recruitRouter;
