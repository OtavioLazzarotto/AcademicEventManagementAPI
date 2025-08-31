import { dataValidation } from "@/common/infrastructure/validation/zod";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { CreateUsersUseCase } from "@/users/application/usecases/create-user.usecase";
import { StatusPermission } from "@/users/domain/models/users.model";

export async function CreateUserController(
  request: Request,
  response: Response
) {
  const createUserSchemaBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    roles: z.nativeEnum(StatusPermission).optional(),
  });

  const { name, email, password, roles } = dataValidation(
    createUserSchemaBody,
    request.body
  );

  const createUserUseCase: CreateUsersUseCase.UseCase =
    container.resolve("CreateUsersUseCase");

  await createUserUseCase.execute({
    name,
    email,
    password,
    roles
  });

  response.status(200).json([{ message: "Usuário criado com sucesso!" }]);
}
