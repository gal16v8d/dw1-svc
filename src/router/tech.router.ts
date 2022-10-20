import { Router } from 'express';
import constants from '../constant/constant';
import techController from '../controller/tech.controller';

const root = `${constants.DB.TECH}s`;
const techRouter = Router();
techRouter.get(`/${root}`, techController.getAll);
techRouter.get(`/${root}/:id`, techController.getById);
techRouter.post(`/${root}`, techController.save);
techRouter.put(`/${root}/:id`, techController.update);
techRouter.delete(`/${root}/:id`, techController.delete);

export default techRouter;
