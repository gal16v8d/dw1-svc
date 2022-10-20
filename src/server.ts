import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import npmlog from 'npmlog';
import config from './config/app.config';
import limiter from './config/rate-limit';
import constants from './constant/constant';
import authMiddleware from './middleware/auth.middleware';
import tracingMiddleWare from './middleware/tracing.middleware';
import cardRouter from './router/card.router';
import digimonRouter from './router/digimon.router.';
import elementRouter from './router/element.router';
import exchangeRouter from './router/exchange.router';
import gymMachineRouter from './router/gymMachine.router';
import healthRouter from './router/health.router';
import itemRouter from './router/item.router';
import levelRouter from './router/level.router';
import locationRouter from './router/location.router';
import machineRouter from './router/machine.router';
import medalRouter from './router/medal.router';
import menuRouter from './router/menu.router';
import meritPointRouter from './router/meritPoint.router';
import recruitRouter from './router/recruit.router';
import restaurantRouter from './router/restaurant.router';
import restaurantFoodRouter from './router/restaurantFood.router';
import statusRouter from './router/status.router';
import techRouter from './router/tech.router';

npmlog.info(constants.LOG.ROOT, `basePath -> ${config.server.basePath}`);

const corsOptions = {
  origin: config.server.corsUri,
  credentials: true,
  optionSuccessStatus: 200,
};

const server = express();
server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json());
if (config.environment === constants.ENVIRONMENT.PROD) {
  server.use(authMiddleware);
}
server.use(tracingMiddleWare);
server.use(`/${config.server.basePath}`, limiter);
server.use(`/${config.server.basePath}`, cardRouter);
server.use(`/${config.server.basePath}`, digimonRouter);
server.use(`/${config.server.basePath}`, elementRouter);
server.use(`/${config.server.basePath}`, exchangeRouter);
server.use(`/${config.server.basePath}`, gymMachineRouter);
server.use(`/${config.server.basePath}`, healthRouter);
server.use(`/${config.server.basePath}`, itemRouter);
server.use(`/${config.server.basePath}`, levelRouter);
server.use(`/${config.server.basePath}`, locationRouter);
server.use(`/${config.server.basePath}`, machineRouter);
server.use(`/${config.server.basePath}`, medalRouter);
server.use(`/${config.server.basePath}`, menuRouter);
server.use(`/${config.server.basePath}`, meritPointRouter);
server.use(`/${config.server.basePath}`, recruitRouter);
server.use(`/${config.server.basePath}`, restaurantRouter);
server.use(`/${config.server.basePath}`, restaurantFoodRouter);
server.use(`/${config.server.basePath}`, statusRouter);
server.use(`/${config.server.basePath}`, techRouter);

export default server;
