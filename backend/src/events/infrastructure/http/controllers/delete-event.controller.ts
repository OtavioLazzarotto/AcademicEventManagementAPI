import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { DeleteEventUseCase } from "@/events/application/usecases/delete-event.usecase";
import { dataValidation } from "@/common/infrastructure/validation/zod";

export async function DeleteEventController(request: Request, response: Response) {

    const deleteEventParams = z.object({
        id: z.string().uuid(),
    });

    const { id } = dataValidation(
        deleteEventParams,
        request.params
    );

    const deleteEventUseCase: DeleteEventUseCase.UseCase =
        container.resolve("DeleteEventsUseCase");

    await deleteEventUseCase.execute({
        id,
    });

    response.status(200).json([{ message: "Evento deletado com sucesso!" }]);
}