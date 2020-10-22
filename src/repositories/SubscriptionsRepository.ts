import { EntityRepository, Repository } from 'typeorm';

import Subscription from '../models/Subscription';

@EntityRepository(Subscription)
class SubscriptionsRepository extends Repository<Subscription> {
  public async findByDate(date: Date): Promise<Subscription | null> {
    const findSubscription = await this.findOne({
      where: { date },
    });

    return findSubscription || null;
  }
}

export default SubscriptionsRepository;
