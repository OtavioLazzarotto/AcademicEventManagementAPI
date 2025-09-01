import { useMutation } from "@tanstack/react-query";
import { useRegisterEventForm } from "./schemas/registerEventSchema";
import { EventDto } from "../../../tdos/event.dto";
import { registerEvent } from "../../../services/eventsService";
import * as R from "../styled";
import { useNavigate } from "react-router-dom";

const RegisterEvent = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterEventForm();

  const mutation = useMutation({
    mutationFn: async (event: EventDto) => {
      await registerEvent(event);
    },
    onSuccess: () => {
      alert("Evento cadastrado com sucesso!");
      navigate("/eventos/lista");
    },
    onError: (err: any) => {
      alert("Erro ao cadastrar evento!");
      console.error(err);
    },
  });

  const onSubmit = (data: EventDto) => {
    mutation.mutate(data);
  };

  return (
    <R.Container>
      <R.Heading>Cadastrar Evento</R.Heading>
      <R.Form onSubmit={handleSubmit(onSubmit)}>
        <R.FormControl>
          <R.LabelForm htmlFor="title">Título:</R.LabelForm>
          <R.InputForm {...register("title")} placeholder="Digite o título..." />
          {errors.title && <R.ErrorMsg>{errors.title.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.FormControl>
          <R.LabelForm htmlFor="description">Descrição:</R.LabelForm>
          <R.InputForm {...register("description")} placeholder="Digite a descrição..." />
          {errors.description && <R.ErrorMsg>{errors.description.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.FormControl>
          <R.LabelForm htmlFor="date">Data:</R.LabelForm>
          <R.InputForm {...register("date")} type="date" />
          {errors.date && <R.ErrorMsg>{errors.date.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.FormControl>
          <R.LabelForm htmlFor="location">Localização:</R.LabelForm>
          <R.InputForm {...register("location")} placeholder="Digite a localização..." />
          {errors.location && <R.ErrorMsg>{errors.location.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.BtnControl>
          <R.SubmitButton type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Cadastrando..." : "Cadastrar"}
          </R.SubmitButton>
          <R.BackButton type="button" onClick={() => navigate("/eventos/lista")}>
            Voltar
          </R.BackButton>
        </R.BtnControl>
      </R.Form>
    </R.Container>
  );
};

export default RegisterEvent;
