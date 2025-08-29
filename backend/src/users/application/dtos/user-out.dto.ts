import { StatusPermission } from "@/users/domain/models/users.model";

export type UserOutput = {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: StatusPermission;
  created_at: Date;
  updated_at: Date;
};
