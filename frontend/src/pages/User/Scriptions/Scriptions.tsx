import { useQuery } from "@tanstack/react-query";
import { fetchMyScriptions } from "../../../services/subscriptionService";
import * as S from "./styles";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useNavigate } from "react-router-dom";

function Scriptions() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    data: scriptions,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-scriptions"],
    queryFn: () => fetchMyScriptions(user!.id),
    enabled: !!user,
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

      {!scriptions || scriptions.length === 0 ? (
        <S.Message>Nenhum evento encontrado.</S.Message>
      ) : (
        scriptions.map((scription) => (
          <S.EventCard key={scription.id}>
            <S.EventTitle>{scription.event.title}</S.EventTitle>
            <S.EventInfo>
              Data: {new Date(scription.event.date).toLocaleDateString("pt-BR")}
            </S.EventInfo>
            <S.EventInfo>Local: {scription.event.location}</S.EventInfo>
          </S.EventCard>
        ))
      )}
      <S.BackButton to="/">Voltar</S.BackButton>
    </S.Container>
  );
}

export default Scriptions;
