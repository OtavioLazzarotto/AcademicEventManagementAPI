import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllEventUseCase } from "@/events/application/usecases/getAll-event.usecase";

export async function GetAllEventController(
  request: Request,
  response: Response
) {

    const getAllEventUseCase: GetAllEventUseCase.UseCase =
        container.resolve("GetAllEventsUseCase");

    const events = await getAllEventUseCase.execute();

    response.status(200).json(events);

}