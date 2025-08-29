import { JwtAuthProvider } from "@/common/infrastructure/providers/auth-provider/auth-provider.jwt";
import { dataValidation } from "@/common/infrastructure/validation/zod";
import { AuthenticateUserUseCase } from "@/users/application/usecases/authenticate-user.usecase";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";

export async function AuthenticateUserController(
  request: Request,
  response: Response
) {
  const authenticateUserSchemaBody = z.object({
    email: z.string(),
    password: z.string(),
  });

  const { email, password } = dataValidation(
    authenticateUserSchemaBody,
    request.body
  );

  const authenticateUserUseCase: AuthenticateUserUseCase.UseCase =
    container.resolve("AuthenticateUserUseCase");

  const user = await authenticateUserUseCase.execute({ email, password });

  const authProviderJwt: JwtAuthProvider = container.resolve("AuthProviderJwt");

  const access_token = authProviderJwt.generateAuthKey(user.id, user.roles);

  response.status(200).json({
      name: user.name,
      access_token: access_token,
  });
}
