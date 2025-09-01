import { z } from "zod";
import { useZodForm } from "../../../../hooks/Form/useZodForm";

export const registerEventSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  location: z.string(),
});

export const useRegisterEventForm = () => useZodForm(registerEventSchema);
