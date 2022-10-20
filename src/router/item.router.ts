import { Router } from 'express';
import constants from '../constant/constant';
import itemController from '../controller/item.controller';

const root = `${constants.DB.ITEM}s`;
const itemRouter = Router();
itemRouter.get(`/${root}`, itemController.getAll);
itemRouter.get(`/${root}/:id`, itemController.getById);
itemRouter.post(`/${root}`, itemController.save);
itemRouter.put(`/${root}/:id`, itemController.update);
itemRouter.delete(`/${root}/:id`, itemController.delete);

export default itemRouter;
