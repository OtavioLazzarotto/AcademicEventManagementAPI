import { z } from "zod";
import { useZodForm } from "../../../hooks/Form/useZodForm";

export const authenticateSchema = z.object({
  email: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("Digite um e-mail válido"),
  password: z
    .string()
    .min(1, "Senha é obrigatória")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type AuthenticateFormData = z.infer<typeof authenticateSchema>;

export const useAuthenticateForm = () => useZodForm(authenticateSchema);
