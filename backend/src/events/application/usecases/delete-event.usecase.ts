import { BadRequestError } from "@/common/domain/errors/badRequest-error";
import { EventRepository } from "@/events/repositories/event.repository";
import { inject, injectable } from "tsyringe";

export namespace DeleteEventUseCase {
  
    export type Input = {
        id: string;
    };

    export type Output = void;

    @injectable()
    export class UseCase {
        constructor(
            @inject("EventsRepository")
            private eventsRepository: EventRepository
        ) {}

        async execute(input: Input): Promise<Output> {

            if(!input.id) {
                throw new BadRequestError("Event ID not provided");
            }

            await this.eventsRepository.delete(input.id);
        }

    }   
}