import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEventsByUserSubscriptionUsecase } from "@/subscriptions/application/usecases/findEventsByUser-subscription.usecase";

export async function FindEventsByUserSubscriptionController(request: Request, response: Response) {

    const findEventsByUserSubscriptionUsecase: FindEventsByUserSubscriptionUsecase.Usecase = container.resolve("FindEventsByUserSubscriptionUsecase");

    const subscriptions = await findEventsByUserSubscriptionUsecase.execute({
        userId: request.user.id
    });

    response.status(200).json(subscriptions);

}