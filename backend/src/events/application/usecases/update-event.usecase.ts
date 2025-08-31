import { inject, injectable } from "tsyringe";
import { EventOutputDTO } from "../dtos/event-output.dto";
import { EventRepository } from "@/events/repositories/event.repository";
import { BadRequestError } from "@/common/domain/errors/badRequest-error";

export namespace UpdateEventUseCase {

    export type Input = {
        id: string;
        title?: string;
        description?: string;
        date?: Date;
        location?: string;
    };

    export type Output = EventOutputDTO;

    @injectable()
    export class UseCase {
        constructor(
            @inject("EventsRepository")
            private eventsRepository: EventRepository
        ) {}

        async execute(input: Input): Promise<Output> {

            const event = await this.eventsRepository.findById(input.id);

            if (!event) {
                throw new BadRequestError("Event not found");
            }

            if(input.title) {
                event.title = input.title;
            }

            if(input.description) {
                event.description = input.description;
            }

            if(input.date) {
                event.date = input.date;
            }

            if(input.location) {
                event.location = input.location;
            }

            const result: EventOutputDTO = await this.eventsRepository.update(event);
            return result;

    }
    

}

}