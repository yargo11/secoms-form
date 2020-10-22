import { getCustomRepository } from 'typeorm';
import Subscription from '../models/Subscription';
import SubscriptionsRepository from '../repositories/SubscriptionsRepository';

interface Request {
  user: string;
  email: string;
  date: Date;
}

class CreateSubscriptionService {
  public async execute({ user, email, date }: Request): Promise<Subscription> {
    const subscriptionsRepository = getCustomRepository(
      SubscriptionsRepository,
    );
    const subscription = subscriptionsRepository.create({
      user,
      email,
      date,
    });

    await subscriptionsRepository.save(subscription);

    return subscription;
  }
}

export default CreateSubscriptionService;
