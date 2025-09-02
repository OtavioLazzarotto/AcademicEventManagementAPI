import { Router } from "express";
import { SubscribreSubscriptionController } from "../controllers/subscribe-subscription.controller";
import { isAuth } from "@/common/infrastructure/http/middlewares/isAuth";
import { isAdmin } from "@/common/infrastructure/http/middlewares/isAdmin";
import { FindByEventIDSubscriptionController } from "../controllers/findByEventID-subscription.controller";
import { FindEventsByUserSubscriptionController } from "../controllers/findEventsByUser-subscription.controller";

const subscriptionRouter = Router();

subscriptionRouter.post("/subscribe", isAuth, SubscribreSubscriptionController);

subscriptionRouter.get(
  "/events/:userId",
  isAuth,
  FindEventsByUserSubscriptionController
);

subscriptionRouter.get(
  "/:eventId",
  isAuth,
  isAdmin,
  FindByEventIDSubscriptionController
);

export { subscriptionRouter };
