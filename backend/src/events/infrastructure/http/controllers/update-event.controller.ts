import { dataValidation } from "@/common/infrastructure/validation/zod";
import { UpdateEventUseCase } from "@/events/application/usecases/update-event.usecase";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";

export async function UpdateEventController(
  request: Request,
  response: Response
) {

    const updateEventSchemaParams = z.object({
        id: z.string().uuid(),
    });

    const { id } = dataValidation(
        updateEventSchemaParams,
        request.params
    );

    const updateEventSchemaBody = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
        }).optional(),
        location: z.string().optional(),
    });

    const { name, description, date, location } = dataValidation(
        updateEventSchemaBody,
        request.body
    );

  const updateEventUseCase: UpdateEventUseCase.UseCase =
      container.resolve("UpdateEventsUseCase");

    await updateEventUseCase.execute({
        id,
        name,
        description,
        date,
        location,
    });

    response.status(200).json([{ message: "Evento atualizado com sucesso!" }]);

}