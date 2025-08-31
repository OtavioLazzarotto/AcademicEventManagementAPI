import { Request, Response } from "express";
import { z } from "zod";
import { dataValidation } from '../../../../common/infrastructure/validation/zod/index';
import { container } from "tsyringe";
import { FindByEventIDSubscriptionUsecase } from "@/subscriptions/application/usecases/findByEventID-subscription.usecase";

export async function FindByEventIDSubscriptionController(request: Request, response: Response) {

    const FindByEventIDSubscriptionSchemaParams = z.object({
        eventId: z.string().uuid(),
    });

    const { eventId } = dataValidation(FindByEventIDSubscriptionSchemaParams, request.params);


    const findByEventIDSubscriptionUsecase: FindByEventIDSubscriptionUsecase.Usecase = container.resolve("FindByEventIDSubscriptionUsecase");


    const subscriptions = await findByEventIDSubscriptionUsecase.execute({
        eventId: eventId
    });

    response.status(200).json(subscriptions);

}