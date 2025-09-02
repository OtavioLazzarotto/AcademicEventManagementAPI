import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUserByEvent } from "../../../services/subscriptionService";
import * as S from "./styles";
import { useParams } from "react-router-dom";

interface Subscription {
  id: string;
  user: { id: string; name: string };
  event: { id: string; title: string };
}

function ListUserByEvents() {
  const { eventId } = useParams<{ eventId: string }>();
  const queryClient = useQueryClient();

  const {
    data: subscriptions,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user-by-event", eventId],
    queryFn: () => fetchUserByEvent(eventId),
  });

  queryClient.invalidateQueries({
    queryKey: ["user-by-event", eventId],
  });

  if (isLoading)
    return <S.LoadingContainer>Carregando inscritos...</S.LoadingContainer>;

  if (isError)
    return (
      <S.Message>
        Erro ao carregar inscritos: {(error as Error).message}
      </S.Message>
    );

  if (!subscriptions || subscriptions.length === 0)
    return <S.Message>Nenhum inscrito encontrado.</S.Message>;

  const eventsMap: Record<
    string,
    { title: string; users: { id: string; name: string }[] }
  > = {};

  subscriptions.forEach((sub: Subscription) => {
    if (!eventsMap[sub.event.id]) {
      eventsMap[sub.event.id] = { title: sub.event.title, users: [] };
    }
    eventsMap[sub.event.id].users.push(sub.user);
  });

  return (
    <S.Container>
      <S.Heading>Lista de Inscritos por Evento</S.Heading>

      {Object.entries(eventsMap).map(([eventId, { title, users }]) => (
        <S.EventCard key={eventId}>
          <S.EventTitle>{title}</S.EventTitle>
          <S.UsersList>
            {users.map((user) => (
              <S.UserItem key={user.id}>{user.name}</S.UserItem>
            ))}
          </S.UsersList>
        </S.EventCard>
      ))}

      <S.BackButton to="/">Voltar</S.BackButton>
    </S.Container>
  );
}

export default ListUserByEvents;
