import { z } from "zod";
import { useZodForm } from "../../../hooks/Form/useZodForm";

export const registerUserSchema = z.object({
  email: z.string().min(1, "Nome obrigatorio"),
  name: z.string().min(1, "Usuário obrigatorio"),
  password: z.string().min(1, "Senha obrigatorio"),
  roles: z.enum(["admin", "user"]),
});

export const useRegisterUserForm = () => useZodForm(registerUserSchema);
