import { SubscriptionModel } from "../models/subscription.model";
import { EventMapper } from "./EventMapper";
import { SubscriptionDTO } from "./SubscriptionDTO";
import { UserMapper } from "./UserMapper";

export class SubscriptionMapper {
  static toDTO(subscription: SubscriptionModel): SubscriptionDTO {
    return {
      id: subscription.id,
      user: UserMapper.toDTO(subscription.user),
      event: EventMapper.toDTO(subscription.event),
      created_at: subscription.created_at,
      updated_at: subscription.updated_at,
    };
  }
}
