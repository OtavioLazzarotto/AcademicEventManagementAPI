import { inject, injectable } from "tsyringe";
import { Repository } from "typeorm";
import { Subscriptions } from "../entities/subscription.entity";
import { SubscriptionModel } from "@/subscriptions/domain/models/subscription.model";
import {
  CreateSubscriptionProps,
  SubscriptionsRepository,
} from "@/subscriptions/repositories/subscription.repository";
import { SubscriptionMapper } from "@/subscriptions/domain/mappers/SubscriptionMapper";
import { SubscriptionDTO } from "@/subscriptions/domain/mappers/SubscriptionDTO";

@injectable()
export class SubscriptionTypeormRepository implements SubscriptionsRepository {
  constructor(
    @inject("SubscriptionDefaultTypeormRepository")
    private subscriptionRepository: Repository<Subscriptions>
  ) {}

  async subscribe(props: CreateSubscriptionProps): Promise<SubscriptionModel> {

    return this.subscriptionRepository.save(props);
  }

  async findEventsByUser(userId: string): Promise<SubscriptionModel[]> {
    return this.subscriptionRepository.find({
      where: { user: { id: userId } },
      relations: { event: { createdBy: true }, user: true },
    });
  }

  async findByEventId(eventId: string): Promise<SubscriptionDTO[]> {

    const data = await this.subscriptionRepository.find({
      where: { event: { id: eventId } },
      relations: { user: true, event: { createdBy: true } },
    });

    return data.map((sub) => SubscriptionMapper.toDTO(sub));
  }

  async findByUserAndEvent(
    userId: string,
    eventId: string
  ): Promise<SubscriptionModel | null> {
    const existing = this.subscriptionRepository.findOne({
      where: {
        user: { id: userId },
        event: { id: eventId },
      },
    });

    return existing;
  }
}
