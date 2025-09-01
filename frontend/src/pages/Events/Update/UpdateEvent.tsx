import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvents, updateEvent } from "../../../services/eventsService";
import { EventDto } from "../../../tdos/event.dto";
import { useUpdateEventForm } from "../Register/schemas/updateEventSchema";
import * as R from "../styled";

const UpdateEvent = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useUpdateEventForm();

  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const event = events?.find(e => e.id === eventId);

  useEffect(() => {
    if (event) {
      reset({
        ...event,
        date: event.date.slice(0, 10), // YYYY-MM-DD
      });
    }
  }, [event, reset]);

  const mutation = useMutation({
    mutationFn: (data: EventDto) => updateEvent(eventId!, data),
    onSuccess: () => {
      alert("Evento atualizado com sucesso!");
      navigate("/eventos/lista");
    },
    onError: (err: any) => {
      alert(`Erro ao atualizar evento: ${err.message}`);
    },
  });

  if (!event) return <R.Message>Carregando evento...</R.Message>;

  const onSubmit = (data: EventDto) => mutation.mutate(data);

  return (
    <R.Container>
      <R.Heading>Editar Evento</R.Heading>
      <R.Form onSubmit={handleSubmit(onSubmit)}>
        <R.FormControl>
          <R.LabelForm htmlFor="title">Título:</R.LabelForm>
          <R.InputForm {...register("title")} />
          {errors.title && <R.ErrorMsg>{errors.title.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.FormControl>
          <R.LabelForm htmlFor="description">Descrição:</R.LabelForm>
          <R.InputForm {...register("description")} />
          {errors.description && <R.ErrorMsg>{errors.description.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.FormControl>
          <R.LabelForm htmlFor="date">Data:</R.LabelForm>
          <R.InputForm {...register("date")} type="date" />
          {errors.date && <R.ErrorMsg>{errors.date.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.FormControl>
          <R.LabelForm htmlFor="location">Localização:</R.LabelForm>
          <R.InputForm {...register("location")} />
          {errors.location && <R.ErrorMsg>{errors.location.message}</R.ErrorMsg>}
        </R.FormControl>

        <R.BtnControl>
          <R.SubmitButton type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Atualizando..." : "Atualizar"}
          </R.SubmitButton>
          <R.BackButton type="button" onClick={() => navigate("/eventos/lista")}>
            Voltar
          </R.BackButton>
        </R.BtnControl>
      </R.Form>
    </R.Container>
  );
};

export default UpdateEvent;
