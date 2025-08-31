import { NotFoundError } from "@/common/domain/errors/not-found-error";
import { EventModel } from "@/events/domain/models/event.model";
import { CreateEventProps, EventRepository } from "@/events/repositories/event.repository";
import { inject, injectable } from "tsyringe";
import { Repository } from "typeorm";
import { Events } from "../entities/events.entity";

@injectable()
export class EventTypeormRepository implements EventRepository {
  constructor(
    @inject("EventsDefaultTypeormRepository")
    private eventsRepository: Repository<Events>
  ) {}
  
    async getAllEvents(): Promise<EventModel[]> {
        const events = await this.eventsRepository.find();

        if(!events) {
            throw new NotFoundError("No events found");
        }

        return events.map(event => ({
            id: event.id,
            title: event.title,
            description: event.description,
            date: event.date,
            location: event.location,
            createdBy: event.createdBy.id,
            created_at: event.created_at,
            updated_at: event.updated_at,
        } as EventModel));
    }

    create(props: CreateEventProps): EventModel {
        // Map createdBy string to an object with id property
        const eventEntity = this.eventsRepository.create({
            ...props,
            createdBy: { id: props.createdBy }
        });
        return {
            id: eventEntity.id,
            title: eventEntity.title,
            description: eventEntity.description,
            date: eventEntity.date,
            location: eventEntity.location,
            createdBy: eventEntity.createdBy.id,
            created_at: eventEntity.created_at,
            updated_at: eventEntity.updated_at,
        } as EventModel;
    }

    async insert(model: EventModel): Promise<EventModel> {
        const eventEntity = this.eventsRepository.create({
            ...model,
            createdBy: { id: model.createdBy }
        });
        const event = await this.eventsRepository.save(eventEntity);
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            date: event.date,
            location: event.location,
            createdBy: event.createdBy.id,
            created_at: event.created_at,
            updated_at: event.updated_at,
        } as EventModel;
    }

    async findById(id: string): Promise<EventModel> {
        return await this._get(id);
    }

    async update(model: EventModel): Promise<EventModel> {
        const event = await this._get(model.id);

         const eventEntity = this.eventsRepository.create({
            ...model,
            createdBy: { id: model.createdBy }
        });
        await this.eventsRepository.update({ id: model.id }, eventEntity);
        return event;
    }

    async delete(id: string): Promise<void> {
        await this._get(id);
        await this.eventsRepository.delete({ id });
    }

    private async _get(id: string): Promise<EventModel> {
        
        const event = await this.eventsRepository.findOneBy({ id });
        
        if (!event) {
            throw new NotFoundError("Event not found");
        }

        return {
            id: event.id,
            title: event.title,
            description: event.description,
            date: event.date,
            location: event.location,
            createdBy: event.createdBy.id,
            created_at: event.created_at,
            updated_at: event.updated_at,
        } as EventModel;
    }

}