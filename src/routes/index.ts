// src/routes/index.ts
import { Router } from 'express';
import subscriptionsRouter from './subscriptions.routes';

const routes = Router();

routes.use('/subscriptions', subscriptionsRouter);

export default routes;
