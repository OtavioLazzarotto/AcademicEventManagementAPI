import { UserDTO } from "./UserDTO";

export interface EventDTO {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  created_at: Date;
  updated_at: Date;
  createdBy: UserDTO;
}
