import { Router } from 'express';
import constants from '../constant/constant';
import restaurantFoodController from '../controller/restaurantFood.controller';

const root = `${constants.DB.RESTAURANT_FOOD}`;
const restaurantFoodRouter = Router();
restaurantFoodRouter.get(`/${root}`, restaurantFoodController.getAll);
restaurantFoodRouter.get(`/${root}/:id`, restaurantFoodController.getById);
restaurantFoodRouter.post(`/${root}`, restaurantFoodController.save);
restaurantFoodRouter.put(`/${root}/:id`, restaurantFoodController.update);
restaurantFoodRouter.delete(`/${root}/:id`, restaurantFoodController.delete);

export default restaurantFoodRouter;
