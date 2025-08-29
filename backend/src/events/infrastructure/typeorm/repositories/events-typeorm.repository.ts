import { NotFoundError } from "@/common/domain/errors/not-found-error";
import { EventModel } from "@/events/domain/models/event.model";
import { CreateEventProps, EventRepository } from "@/events/repositories/event.repository";
import { inject } from "tsyringe";
import { Repository } from "typeorm";

export class EventTypeormRepository implements EventRepository {
  constructor(
    @inject("EventsDefaultTypeormRepository")
    private eventsRepository: Repository<EventModel>
  ) {}
  
    async getAllEvents(): Promise<EventModel[]> {
        const events = await this.eventsRepository.find();

        if(!events) {
            throw new NotFoundError("No events found");
        }

        return events;
    }

    create(props: CreateEventProps): EventModel {
        return this.eventsRepository.create(props);
    }

    async insert(model: EventModel): Promise<EventModel> {
        const event = await this.eventsRepository.save(model);
        return event;
    }

    async findById(id: string): Promise<EventModel> {
        return await this._get(id);
    }

    async update(model: EventModel): Promise<EventModel> {
        const event = await this._get(model.id);
        await this.eventsRepository.update({ id: model.id }, model);
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

        return event;
    }

}