import { NotFoundError } from "@/common/domain/errors/not-found-error";
import { EventModel } from "@/events/domain/models/event.model";
import {
  CreateEventProps,
  EventRepository,
} from "@/events/repositories/event.repository";
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

    if (!events) {
      throw new NotFoundError("No events found");
    }

    return events.map(
      (event) =>
        ({
          id: event.id,
          title: event.title,
          description: event.description,
          date: event.date,
          location: event.location,
          createdBy: {
            id: event.createdBy.id,
            name: event.createdBy.name,
            email: event.createdBy.email,
            roles: event.createdBy.roles,
            created_at: event.createdBy.created_at,
            updated_at: event.createdBy.updated_at,
          },
          created_at: event.created_at,
          updated_at: event.updated_at,
        }) as EventModel
    );
  }

  create(props: CreateEventProps): EventModel {
    const eventEntity = this.eventsRepository.create({
      ...props,
      createdBy: { id: props.createdBy },
    });
    return {
      id: eventEntity.id,
      title: eventEntity.title,
      description: eventEntity.description,
      date: eventEntity.date,
      location: eventEntity.location,
      createdBy: {
        id: eventEntity.createdBy.id,
        name: eventEntity.createdBy.name,
        email: eventEntity.createdBy.email,
        roles: eventEntity.createdBy.roles,
        created_at: eventEntity.createdBy.created_at,
        updated_at: eventEntity.createdBy.updated_at,
      },
      created_at: eventEntity.created_at,
      updated_at: eventEntity.updated_at,
    } as EventModel;
  }

  async insert(model: EventModel): Promise<EventModel> {
    const eventEntity = this.eventsRepository.create(model);
    await this.eventsRepository.save(eventEntity);
    return eventEntity;
  }

  async findById(id: string): Promise<EventModel> {
    return await this._get(id);
  }

  async update(model: EventModel): Promise<EventModel> {
    const event = await this._get(model.id);

    const eventEntity = this.eventsRepository.create(model);
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

    return event;
  }
}
