import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEventsByUserSubscriptionUsecase } from "@/subscriptions/application/usecases/findEventsByUser-subscription.usecase";
import { z } from "zod";
import { dataValidation } from "@/common/infrastructure/validation/zod";

export async function FindEventsByUserSubscriptionController(request: Request, response: Response) {

    const FindEventsByUserSubscriptionSchemaParams = z.object({
        userId: z.string().uuid(),
    });

    const { userId } = dataValidation(FindEventsByUserSubscriptionSchemaParams, request.params);

    const findEventsByUserSubscriptionUsecase: FindEventsByUserSubscriptionUsecase.Usecase = container.resolve("FindEventsByUserSubscriptionUsecase");

    const subscriptions = await findEventsByUserSubscriptionUsecase.execute({
        userId
    });

    response.status(200).json(subscriptions);

}