import { Router } from 'express';
import constants from '../constant/constant';
import locationController from '../controller/location.controller';

const root = `${constants.DB.LOCATION}s`;
const locationRouter = Router();
locationRouter.get(`/${root}`, locationController.getAll);
locationRouter.get(`/${root}/:id`, locationController.getById);
locationRouter.post(`/${root}`, locationController.save);
locationRouter.put(`/${root}/:id`, locationController.update);
locationRouter.delete(`/${root}/:id`, locationController.delete);

export default locationRouter;
