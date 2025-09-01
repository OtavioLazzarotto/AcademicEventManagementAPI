import { z } from "zod";
import { useZodForm } from "../../../../hooks/Form/useZodForm";

export const updateEventSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  date: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Formato de data inválido",
    })
    .optional(),
  location: z.string().optional(),
});

export const useUpdateEventForm = () => useZodForm(updateEventSchema);