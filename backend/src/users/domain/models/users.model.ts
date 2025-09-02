import { Events } from "@/events/infrastructure/typeorm/entities/events.entity";

export enum StatusPermission {
  ADM = "admin",
  USER = "user",
}
export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: StatusPermission;
  eventsCreated: Events[];
  created_at: Date;
  updated_at: Date;
}
