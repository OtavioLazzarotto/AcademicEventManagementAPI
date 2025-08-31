import { inject, injectable } from "tsyringe";
import { EventOutputDTO } from "../dtos/event-output.dto";
import { EventRepository } from "@/events/repositories/event.repository";
import { BadRequestError } from "@/common/domain/errors/badRequest-error";

export namespace CreateEventUseCase {
  export type Input = {
    title: string;
    description: string;
    date: Date;
    location: string;
    createdBy: string;
  };

  export type Output = EventOutputDTO;

  @injectable()
  export class UseCase {
    constructor(
      @inject("EventsRepository")
      private eventsRepository: EventRepository
    ) {}

    async execute(input: Input): Promise<Output> {
      if (
        !input.title ||
        !input.description ||
        !input.date ||
        !input.location ||
        !input.createdBy
      ) {
        throw new BadRequestError("Input data not provided or invalid");
      }
    

      const event = this.eventsRepository.create(input);

      const createdEvent: EventOutputDTO =
        await this.eventsRepository.insert(event);
      return createdEvent;
    }
  }
}
