import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Subscription;
