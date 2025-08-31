import { UserDTO } from "./UserDTO";
import { EventDTO } from "./EventDTO";

export interface SubscriptionDTO {
  id: string;
  user: UserDTO;
  event: EventDTO;
  created_at: Date;
  updated_at: Date;
}