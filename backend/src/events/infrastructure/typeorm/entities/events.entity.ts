import { EventModel } from "@/events/domain/models/event.model";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("events")
export class Event implements EventModel {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    date: Date;

    @Column()
    location: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}