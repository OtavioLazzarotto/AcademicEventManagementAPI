import { api } from './api';
import { EventResponse } from "../tdos/event.dto";

export const subscribeToEvent = async (
  eventId: string,
  userId: string
): Promise<void> => {

  await api.post(`/subscriptions/subscribe`, { eventId, userId });
};

export const fetchMyScriptions = async (
  userId: string
): Promise<EventResponse> => {
    const response = await api.get("/subscriptions/events/user");

    return response.data
}
