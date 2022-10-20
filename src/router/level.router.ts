import { Router } from 'express';
import constants from '../constant/constant';
import levelController from '../controller/level.controller';

const root = `${constants.DB.LEVEL}s`;
const levelRouter = Router();
levelRouter.get(`/${root}`, levelController.getAll);
levelRouter.get(`/${root}/:id`, levelController.getById);
levelRouter.post(`/${root}`, levelController.save);
levelRouter.put(`/${root}/:id`, levelController.update);
levelRouter.delete(`/${root}/:id`, levelController.delete);

export default levelRouter;
