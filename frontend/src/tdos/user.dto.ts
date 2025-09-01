export enum StatusPermission {
  ADM = "Administrador",
  USER = "User",
}

export interface UserDto {
  id?: string;
  name: string;
  email: string;
  password: string;
  roles: StatusPermission;
  created_at?: Date;
  updated_at?: Date;
}

export interface AuthDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  user: UserDto;
  access_token: string;
}
