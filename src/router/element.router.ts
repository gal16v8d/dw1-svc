import { Router } from 'express';
import constants from '../constant/constant';
import elementController from '../controller/element.controller';

const root = `${constants.DB.ELEMENT}s`;
const elementRouter = Router();
elementRouter.get(`/${root}`, elementController.getAll);
elementRouter.get(`/${root}/:id`, elementController.getById);
elementRouter.post(`/${root}`, elementController.save);
elementRouter.put(`/${root}/:id`, elementController.update);
elementRouter.delete(`/${root}/:id`, elementController.delete);

export default elementRouter;
