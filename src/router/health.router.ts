import { Router } from 'express';
import healthController from '../controller/health.controller';

const healthRouter = Router();
healthRouter.get('/health', healthController.check);

export default healthRouter;
