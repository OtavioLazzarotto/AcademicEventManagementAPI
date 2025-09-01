import { inject, injectable } from "tsyringe";
import { SubscriptionsOutput } from "../dtos/subscriptions-output.dto";
import { SubscriptionsRepository } from '@/subscriptions/repositories/subscription.repository';

export namespace FindEventsByUserSubscriptionUsecase {
    export type Input = {
        userId: string;
    };

    export type Output = SubscriptionsOutput[];

    @injectable()
    export class Usecase {
        constructor(
            @inject("SubscriptionsRepository")
            private subscriptionsRepository: SubscriptionsRepository
        ) {}

        async execute(input: Input): Promise<Output> {

            const subscriptions = await this.subscriptionsRepository.findEventsByUser(input.userId);

            return subscriptions.map(subscription => ({
                ...subscription,
                user: {
                    ...subscription.user,
                    password: '', 
                    eventsCreated: [] 
                },
                event: {
                    ...subscription.event,
                    createdBy: {
                        ...subscription.event.createdBy,
                        password: '',
                        eventsCreated: [] 
                    }
                }
            }));

        }
    }

}