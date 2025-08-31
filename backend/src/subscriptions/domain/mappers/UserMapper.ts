import { UserModel } from "@/users/domain/models/users.model";
import { UserDTO } from "./UserDTO";

export class UserMapper {
  static toDTO(user: UserModel): UserDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}