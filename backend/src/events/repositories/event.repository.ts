import { RepositoryInterface } from "@/common/domain/repositories/repository.interface";
import { EventModel } from "../domain/models/event.model";

export interface CreateEventProps {
    title: string;
    description: string;
    date: Date;
    location: string;
    createdBy: string;
}

export interface EventRepository
    extends RepositoryInterface<EventModel, CreateEventProps> {
        getAllEvents(): Promise<EventModel[]>;
}