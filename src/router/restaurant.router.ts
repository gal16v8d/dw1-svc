import { Router } from 'express';
import constants from '../constant/constant';
import restaurantController from '../controller/restaurant.controller';

const root = `${constants.DB.RESTAURANT}s`;
const restaurantRouter = Router();
restaurantRouter.get(`/${root}`, restaurantController.getAll);
restaurantRouter.get(`/${root}/:id`, restaurantController.getById);
restaurantRouter.post(`/${root}`, restaurantController.save);
restaurantRouter.put(`/${root}/:id`, restaurantController.update);
restaurantRouter.delete(`/${root}/:id`, restaurantController.delete);

export default restaurantRouter;
