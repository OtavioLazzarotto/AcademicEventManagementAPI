import { EventModel } from "@/events/domain/models/event.model";
import { EventDTO } from "./EventDTO";


export class EventMapper {
  static toDTO(event: EventModel): EventDTO {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      created_at: event.created_at,
      updated_at: event.updated_at,
      createdBy: event.createdBy,
  }
}

}
