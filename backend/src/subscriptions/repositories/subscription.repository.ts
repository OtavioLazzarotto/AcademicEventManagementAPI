
import { Users } from "@/users/infrastructure/typeorm/entities/users.entity";
import { SubscriptionModel } from "../domain/models/subscription.model";
import { Events } from "@/events/infrastructure/typeorm/entities/events.entity";
import { SubscriptionDTO } from "../domain/mappers/SubscriptionDTO";

export type CreateSubscriptionProps = {
    user: Users;
    event: Events;
};

export interface SubscriptionsRepository {
    subscribe(props: CreateSubscriptionProps): Promise<SubscriptionModel>;
    findByEventId(eventId: string): Promise<SubscriptionDTO[]>;
    findEventsByUser(userId: string): Promise<SubscriptionModel[]>;
    findByUserAndEvent(userId: string, eventId: string): Promise<SubscriptionModel | null>;
    
}