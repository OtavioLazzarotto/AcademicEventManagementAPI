import { StatusPermission } from "@/users/domain/models/users.model";


export interface UserDTO {
  id: string;
  name: string;
  email: string;
  roles: StatusPermission;
  created_at: Date;
  updated_at: Date;
}