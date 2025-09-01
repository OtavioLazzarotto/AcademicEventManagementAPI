import { Users } from "@/users/infrastructure/typeorm/entities/users.entity"

export type EventOutputDTO = {
  id: string
  title: string
  description: string
  date: Date
  location: string
  createdBy: Users
  created_at: Date
  updated_at: Date
}