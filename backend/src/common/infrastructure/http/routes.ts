import { usersRouter } from "@/users/infrastructure/http/routes/user.route";
import { Router } from "express";

const routes = Router();

routes.use("/user", usersRouter);

export { routes };
