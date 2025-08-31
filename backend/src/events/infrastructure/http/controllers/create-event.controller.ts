import { dataValidation } from "@/common/infrastructure/validation/zod";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { CreateEventUseCase } from "@/events/application/usecases/create-event.usecase";

export async function CreateEventController(
  request: Request,
  response: Response
) {
  const createEventSchemaBody = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    location: z.string(),
  });


  const createdBy = request.user.id;

  const { title, description, date, location} = dataValidation(
    createEventSchemaBody,
    request.body
  );

  const createEventUseCase: CreateEventUseCase.UseCase =
    container.resolve("CreateEventsUseCase");

  await createEventUseCase.execute({
    title,
    description,
    date,
    location,
    createdBy
  });

  response.status(200).json([{ message: "Evento criado com sucesso!" }]);
}
