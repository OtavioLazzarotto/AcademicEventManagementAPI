import { inject, injectable } from "tsyringe";
import { SubscriptionsOutput } from "../dtos/subscriptions-output.dto";
import { SubscriptionsRepository } from '@/subscriptions/repositories/subscription.repository';

export namespace FindByEventIDSubscriptionUsecase {
    export type Input = {
        eventId: string;
    };

    export type Output = SubscriptionsOutput[];

    @injectable()
    export class Usecase {
        constructor(
            @inject("SubscriptionsRepository")
            private subscriptionsRepository: SubscriptionsRepository,
        ) {}

        async execute(input: Input): Promise<Output> {

            const subscriptions = await this.subscriptionsRepository.findByEventId(input.eventId);

            return subscriptions.map((subscription: any) => ({
                ...subscription,
                user: {
                    ...subscription.user,
                    password: undefined,
                    eventsCreated: undefined,
                }
            })) as SubscriptionsOutput[];

        }
    }

}