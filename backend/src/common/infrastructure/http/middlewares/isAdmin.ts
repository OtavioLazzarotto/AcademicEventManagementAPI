import { NextFunction, Request, Response } from "express";
import { StatusPermission } from "@/users/domain/models/users.model";
import { InvalidCredentialsError } from "@/common/domain/errors/invalid-credentials-error";

export function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  if (!request.user) {
    throw new InvalidCredentialsError("User not authenticated");
  }

  if (request.user.roles !== StatusPermission.ADM) {
    throw new InvalidCredentialsError("You do not have permission to perform this action");
  }

  return next();
}
