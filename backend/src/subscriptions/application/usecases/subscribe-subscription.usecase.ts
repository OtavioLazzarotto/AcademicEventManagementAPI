import { inject, injectable } from "tsyringe";
import { SubscriptionsOutput } from "../dtos/subscriptions-output.dto";
import {
  CreateSubscriptionProps,
  SubscriptionsRepository,
} from "@/subscriptions/repositories/subscription.repository";
import { UsersRepository } from "@/users/repositories/user.repository";
import { EventRepository } from "@/events/repositories/event.repository";
import { Events } from "@/events/infrastructure/typeorm/entities/events.entity";
import { BadRequestError } from "@/common/domain/errors/badRequest-error";

export namespace SubscribreSubscriptionUsecase {
  export type Input = {
    user: string;
    event: string;
  };

  export type Output = SubscriptionsOutput;

  @injectable()
  export class Usecase {
    constructor(
      @inject("SubscriptionsRepository")
      private subscriptionsRepository: SubscriptionsRepository,

      @inject("UsersRepository")
      private usersRepository: UsersRepository,

      @inject("EventsRepository")
      private eventsRepository: EventRepository
    ) {}

    async execute(input: Input): Promise<Output> {
      const user = await this.usersRepository.findById(input.user);

      if (!user) {
        throw new Error("User not found");
      }

      const event = await this.eventsRepository.findById(input.event);

      if (!event) {
        throw new Error("Event not found");
      }

      const existing = await this.subscriptionsRepository.findByUserAndEvent(
        user.id,
        event.id
      );

      if (existing) {
        throw new BadRequestError("User already subscribed to this event");
      }

      const data: CreateSubscriptionProps = {
        user,
        event,
      };

      const subscription: SubscriptionsOutput =
        await this.subscriptionsRepository.subscribe(data);

      return subscription;
    }
  }
}
