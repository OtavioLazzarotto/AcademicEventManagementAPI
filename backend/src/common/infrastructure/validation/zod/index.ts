import { AppError } from "@/common/domain/errors/app-error";

export function dataValidation(schema: any, data: any) {
  /**
   * @param schema objeto com schema de validation para Zod
   * @param data objeto com os dados a serem validados
   * @returns retorna os dados validados
   */

  const validatedData = schema.safeParse(data);

  if (validatedData.success === false) {
    console.error("Invalid data", validatedData.error.format());
    throw new AppError(
      `${validatedData.error.erros.map((err: any) => {
        return `${err.path} => ${err.message}`;
      })}`
    );
  }
  return data;
}
