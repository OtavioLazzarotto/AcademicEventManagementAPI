import { EventDto, EventResponse } from "../tdos/event.dto";
import { api } from "./api";


export const fetchEvents = async (): Promise<EventResponse[]> => { 
    const response = await api.get("/events/");

    return response.data;
}

export const registerEvent = async (event: EventDto): Promise<void> => {
    await api.post("events/", event)
}

export const updateEvent = async (eventId: string, event: EventDto): Promise<void> => {
  await api.put(`/events/${eventId}`, event);
};

export const deleteEvent = async (id: string): Promise<void> => {
  console.log(id)
  await api.delete(`/events/${id}`);
};