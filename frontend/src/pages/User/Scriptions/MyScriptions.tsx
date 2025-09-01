import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvents, deleteEvent } from "../../../services/eventsService";
import { subscribeToEvent } from "../../../services/subscriptionService";
import * as S from "./styles";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useNavigate } from "react-router-dom";

function MyScriptions() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const subscribeMutation = useMutation({
    mutationFn: ({ eventId, userId }: { eventId: string; userId: string }) =>
      subscribeToEvent(eventId, userId),

    onSuccess: () => alert("Inscrição realizada com sucesso!"),
    
    onError: (error) =>
      alert(`Erro ao se inscrever: ${(error as Error).message}`),
  });

  if (isLoading)
    return <S.LoadingContainer>Carregando eventos...</S.LoadingContainer>;
  if (isError)
    return (
      <S.Message>
        Erro ao carregar eventos: {(error as Error).message}
      </S.Message>
    );

  return (
    <S.Container>
      <S.Heading>Minhas Inscrições</S.Heading>

      {!events || events.length === 0 ? (
        <S.Message>Nenhum evento encontrado.</S.Message>
      ) : (
        events.map((event) => (
          <S.EventCard key={event.id}>
            <S.EventTitle>{event.title}</S.EventTitle>
            <S.EventDescription>{event.description}</S.EventDescription>
            <S.EventInfo>
              Data: {new Date(event.date).toLocaleDateString("pt-BR")}
            </S.EventInfo>
            <S.EventInfo>Local: {event.location}</S.EventInfo>
            <S.EventInfo>Criado por: {event.createdBy.name}</S.EventInfo>
          </S.EventCard>
        ))
      )}
      <S.BackButton to="/">Voltar</S.BackButton>
    </S.Container>
  );
}

export default MyScriptions;
