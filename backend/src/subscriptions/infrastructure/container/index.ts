import { dataSource } from "@/common/infrastructure/typeorm";
import { container } from "tsyringe";
import { Subscriptions } from "../typeorm/entities/subscription.entity";
import { SubscriptionTypeormRepository } from '../typeorm/repositories/subscription-typeorm.repository';
import { SubscribreSubscriptionUsecase } from "@/subscriptions/application/usecases/subscribe-subscription.usecase";
import { FindByEventIDSubscriptionUsecase } from "@/subscriptions/application/usecases/findByEventID-subscription.usecase";
import { FindEventsByUserSubscriptionUsecase } from "@/subscriptions/application/usecases/findEventsByUser-subscription.usecase";


container.registerSingleton("SubscriptionsRepository", SubscriptionTypeormRepository);

container.registerInstance(
    "SubscriptionDefaultTypeormRepository",
    dataSource.getRepository(Subscriptions)
);

container.registerSingleton(
    "SubscribeSubscriptionUsecase",
    SubscribreSubscriptionUsecase.Usecase
);

container.registerSingleton(
    "FindByEventIDSubscriptionUsecase",
    FindByEventIDSubscriptionUsecase.Usecase
);

container.registerSingleton(
    "FindEventsByUserSubscriptionUsecase",
    FindEventsByUserSubscriptionUsecase.Usecase
);