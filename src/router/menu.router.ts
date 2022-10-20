import { Router } from 'express';
import constants from '../constant/constant';
import menuController from '../controller/menu.controller';

const root = `${constants.DB.MENU}s`;
const menuRouter = Router();
menuRouter.get(`/${root}`, menuController.getAll);
menuRouter.get(`/${root}/:id`, menuController.getById);
menuRouter.post(`/${root}`, menuController.save);
menuRouter.put(`/${root}/:id`, menuController.update);
menuRouter.delete(`/${root}/:id`, menuController.delete);

export default menuRouter;
