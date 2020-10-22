import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscriptions')
class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @Column()
  email: string;

  @Column('timestamp')
  date: Date;
}

export default Subscription;
