export enum StatusPermission {
  ADM = "ADMINISTRADOR",
  USER = "USER",
}

export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: StatusPermission;
  created_at: Date;
  updated_at: Date;
}
