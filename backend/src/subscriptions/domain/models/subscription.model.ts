import { Events } from "@/events/infrastructure/typeorm/entities/events.entity";
import { Users } from "@/users/infrastructure/typeorm/entities/users.entity";

export interface SubscriptionModel {
  id: string;
  user: Users;
  event: Events;
  created_at: Date;
  updated_at: Date;
}
