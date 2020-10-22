import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import SubscriptionsRepository from '../repositories/SubscriptionsRepository';
import CreateSubscriptiontService from '../services/CreateSubscriptionService';

const subscriptionsRouter = Router();

subscriptionsRouter.get('/', async (request, response) => {
  const subscriptionsRepository = getCustomRepository(SubscriptionsRepository);
  const subscriptions = await subscriptionsRepository.find();

  return response.json(subscriptions);
});

subscriptionsRouter.post('/', async (request, response) => {
  try {
    const { user, email, date } = request.body;

    const parsedDate = parseISO(date);

    const createSubscription = new CreateSubscriptiontService();

    const subscription = await createSubscription.execute({
      user,
      email,
      date: parsedDate,
    });

    return response.json({ subscription });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default subscriptionsRouter;
