import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchEvents, deleteEvent } from "../../../services/eventsService";
import { subscribeToEvent } from "../../../services/subscriptionService";
import * as S from "./styles";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useNavigate } from "react-router-dom";

function List() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: events,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const subscribeMutation = useMutation({
    mutationFn: ({ eventId, userId }: { eventId: string; userId: string }) =>
      subscribeToEvent(eventId, userId),
    onSuccess: (_, { eventId }) => {

      alert("Inscrição feita com sucesso!!!")

      queryClient.invalidateQueries({
        queryKey: ["user-by-event", eventId],
      });
    },
    onError: () => {
      alert(`Erro ao inscrever-se, você já esta escrito nesse evento`);
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ["events"],
    mutationFn: (eventId: string) => deleteEvent(eventId),
    onSuccess: () => {
      alert("Evento excluído com sucesso!");

      refetch();
    },
    onError: (error) =>
      alert(`Erro ao excluir evento: ${(error as Error).message}`),
  });

  const handleSubscribe = (eventId: string) => {
    if (!user?.id) return alert("Usuário não logado");

    subscribeMutation.mutate({ eventId, userId: user.id });
  };

  const handleDelete = (eventId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este evento?")) {
      deleteMutation.mutate(eventId);
    }
  };

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
      <S.Heading>Lista de Eventos</S.Heading>

      {user?.roles === "admin" && events!.length >= 0 && (
        <S.AddButton to="/eventos/cadastrar">Adicionar Evento</S.AddButton>
      )}

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

            <S.BtnGroup>
              <S.SubscribeButton onClick={() => handleSubscribe(event.id)}>
                Inscreva-se
              </S.SubscribeButton>

              {user?.roles === "admin" && (
                <>
                  <S.EditButton
                    onClick={() => navigate(`/eventos/editar/${event.id}`)}
                  >
                    Editar
                  </S.EditButton>
                  <S.DeleteButton onClick={() => handleDelete(event.id)}>
                    Excluir
                  </S.DeleteButton>

                  <S.ListEventsButton onClick={() => navigate(`/eventos/lista-de-inscritos/${event.id}`)}>
                    Ver inscritos
                  </S.ListEventsButton>
                </>
              )}
            </S.BtnGroup>
          </S.EventCard>
        ))
      )}
      <S.BackButton to="/">Voltar</S.BackButton>
    </S.Container>
  );
}

export default List;
