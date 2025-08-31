import { Router } from "express";
import { CreateEventController } from "../controllers/create-event.controller";
import { isAdmin } from "@/common/infrastructure/http/middlewares/isAdmin";
import { isAuth } from "@/common/infrastructure/http/middlewares/isAuth";
import { UpdateEventController } from "../controllers/update-event.controller";
import { DeleteEventController } from "../controllers/delete-event.controller";

const eventRouter = Router();

eventRouter.post("/", isAuth, isAdmin, CreateEventController);
eventRouter.put("/:id", isAuth, isAdmin, UpdateEventController);
eventRouter.delete("/:id", isAuth, isAdmin, DeleteEventController);

export { eventRouter };