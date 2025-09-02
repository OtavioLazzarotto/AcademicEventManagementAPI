import { api } from './api';
import { EventByUserResponse, EventResponse } from "../tdos/event.dto";

export const subscribeToEvent = async (
  eventId: string,
  userId: string
): Promise<void> => {

  await api.post(`/subscriptions/subscribe`, { eventId, userId });
};

export const fetchMyScriptions = async (userId: string | undefined): Promise<EventResponse[]> => {
    const response = await api.get(`/subscriptions/events/${userId}`);

    return response.data
}

export const fetchUserByEvent = async (eventId: string | undefined): Promise<EventByUserResponse[]> => {
    const response = await api.get(`/subscriptions/${eventId}`);

    return response.data
}


