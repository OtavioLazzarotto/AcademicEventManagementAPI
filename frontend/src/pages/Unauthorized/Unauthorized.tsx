import { Link } from "react-router-dom";
import * as S from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Unauthorized = () => {

  const { auth, user } = useContext(AuthContext);

  console.log("Unauthorized Page - Auth:", auth);
  console.log("Unauthorized Page - User:", user);

  return (
    <S.Container>
      <S.Card>
        <S.Title>403 - Acesso Negado</S.Title>
        <p>Você não tem permissão para acessar esta página.</p>
        <Link to={"/login"}>Voltar</Link>
      </S.Card>
    </S.Container>
  );
};

export default Unauthorized;
