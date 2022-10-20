import { Router } from 'express';
import constants from '../constant/constant';
import cardController from '../controller/card.controller';

const root = `${constants.DB.CARD}s`;
const cardRouter = Router();
cardRouter.get(`/${root}`, cardController.getAll);
cardRouter.get(`/${root}/:id`, cardController.getById);
cardRouter.post(`/${root}`, cardController.save);
cardRouter.put(`/${root}/:id`, cardController.update);
cardRouter.delete(`/${root}/:id`, cardController.delete);

export default cardRouter;
