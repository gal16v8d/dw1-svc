import { Router } from 'express';
import constants from '../constant/constant';
import exchangeController from '../controller/exchange.controller';

const root = `${constants.DB.EXCHANGE}s`;
const exchangeRouter = Router();
exchangeRouter.get(`/${root}`, exchangeController.getAll);
exchangeRouter.get(`/${root}/:id`, exchangeController.getById);
exchangeRouter.post(`/${root}`, exchangeController.save);
exchangeRouter.put(`/${root}/:id`, exchangeController.update);
exchangeRouter.delete(`/${root}/:id`, exchangeController.delete);

export default exchangeRouter;
