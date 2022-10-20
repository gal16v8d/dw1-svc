import { Router } from 'express';
import constants from '../constant/constant';
import digimonController from '../controller/digimon.controller';

const root = `${constants.DB.DIGIMON}s`;
const digimonRouter = Router();
digimonRouter.get(`/${root}`, digimonController.getAll);
digimonRouter.get(`/${root}/:id`, digimonController.getById);
digimonRouter.post(`/${root}`, digimonController.save);
digimonRouter.put(`/${root}/:id`, digimonController.update);
digimonRouter.delete(`/${root}/:id`, digimonController.delete);

export default digimonRouter;
