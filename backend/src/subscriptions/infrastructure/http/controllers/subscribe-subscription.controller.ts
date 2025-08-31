import { Request, Response } from "express";
import { z } from "zod";
import { dataValidation } from '../../../../common/infrastructure/validation/zod/index';
import { container } from "tsyringe";
import { SubscribreSubscriptionUsecase } from "@/subscriptions/application/usecases/subscribe-subscription.usecase";

export async function SubscribreSubscriptionController(request: Request, response: Response) {

    const SubscribeSubscriptionSchemaBody = z.object({
        eventId: z.string().uuid(),
    });


    const { eventId } = dataValidation(SubscribeSubscriptionSchemaBody, request.body);

    const userId = request.user.id;


    const subscribeSubscriptionUsecase: SubscribreSubscriptionUsecase.Usecase = container.resolve("SubscribeSubscriptionUsecase");


    await subscribeSubscriptionUsecase.execute({
        user: userId,
        event: eventId
    });

    response.status(200).json([{message: "Inscrição realizada com sucesso!"}]);

}