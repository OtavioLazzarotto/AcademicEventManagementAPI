import { Link } from "react-router-dom";
import * as S from "./styled";

function Home() {
  return (
    <S.Container>
      <Link to="/eventos/lista">
        <S.Card>
          <S.Text>Ver lista de eventos</S.Text>
        </S.Card>
      </Link>
    </S.Container>
  );
}

export default Home;
