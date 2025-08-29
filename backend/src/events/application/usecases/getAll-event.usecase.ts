import { inject, injectable } from "tsyringe";
import { EventOutputDTO } from "../dtos/event-output.dto";
import { EventRepository } from "@/events/repositories/event.repository";

export namespace GetAllEventUseCase {

    export type Input = void;

    export type Output = EventOutputDTO[];

    @injectable()
    export class UseCase {
        constructor(
            @inject("EventsRepository")
            private eventsRepository: EventRepository
        ) {}

        async execute(): Promise<Output> {

            const events = await this.eventsRepository.getAllEvents();
            return events;
        }

    }

}