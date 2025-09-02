import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/Auth/useAuth";
import * as N from "./styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setAuth } = useAuth();
  const navigate = useNavigate();
  const [dateActual, setDateActual] = useState("");
  const [hourActual, setHourActual] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      setDateActual(date.toLocaleDateString("pt-BR"));
      setHourActual(
        date.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    setAuth(false);
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <N.Nav>
      <N.ContentRight>
        <N.Date>{dateActual}</N.Date>
        <N.Date>{hourActual}</N.Date>
        {user?.name && <p>Olá, {user.name}</p>}

        {user?.roles == "user" && (
          <N.MyScriptions onClick={() => navigate("/minhas-inscrições")}>
            Minhas Inscrições
          </N.MyScriptions>
        )}

        <N.Logout onClick={handleLogout} aria-label="Fazer logout">
          Sair
        </N.Logout>
      </N.ContentRight>
    </N.Nav>
  );
};

export default Navbar;
