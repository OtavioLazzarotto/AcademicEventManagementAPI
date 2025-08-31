import { eventRouter } from "@/events/infrastructure/http/routes/event.route";
import { subscriptionRouter } from "@/subscriptions/infrastructure/http/routes/subscription.route";
import { usersRouter } from "@/users/infrastructure/http/routes/user.route";
import { Router } from "express";

const routes = Router();

routes.get("/ola", (req, res) => {
  return res.json({ message: "API is running! 🏆" });
});

routes.use("/users", usersRouter);
routes.use("/events", eventRouter);
routes.use("/subscriptions", subscriptionRouter);

export { routes };
