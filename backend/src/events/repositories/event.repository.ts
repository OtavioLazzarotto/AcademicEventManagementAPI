import { RepositoryInterface } from "@/common/domain/repositories/repository.interface";
import { EventModel } from "../domain/models/event.model";

export interface CreateEventProps {
    name: string;
    description: string;
    date: Date;
    location: string;
}

export interface EventRepository
    extends RepositoryInterface<EventModel, CreateEventProps> {
        getAllEvents(): Promise<EventModel[]>;
}