import { Users } from "@/users/infrastructure/typeorm/entities/users.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("events")
export class Events {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column("text")
  description: string;

  @Column({ type: "timestamp" })
  date: Date;

  @Column()
  location: string;

  @ManyToOne(() => Users, (user) => user.eventsCreated, { eager: true })
  @JoinColumn({ name: "created_by" })
  createdBy: Users;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
}
