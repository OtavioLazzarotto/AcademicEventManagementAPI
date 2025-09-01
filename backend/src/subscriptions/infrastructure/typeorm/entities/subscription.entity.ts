import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Users } from "@/users/infrastructure/typeorm/entities/users.entity";
import { Events } from "@/events/infrastructure/typeorm/entities/events.entity";

@Entity("subscriptions")
@Unique(["user", "event"]) // Impede duplicidade (um user não se inscreve 2x no mesmo evento)
export class Subscriptions {
  static toDTO(sub: Subscriptions): any {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, { eager: true })
  user: Users;

  @ManyToOne(() => Events, { eager: true, onDelete: "CASCADE" }, )
  event: Events;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
}
