import { Events } from "@/events/infrastructure/typeorm/entities/events.entity";
import { StatusPermission, UserModel } from "@/users/domain/models/users.model";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class Users implements UserModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: StatusPermission,
    default: StatusPermission.USER,
  })
  roles: StatusPermission;

  @OneToMany(() => Events, (event) => event.createdBy)
  eventsCreated: Events[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
