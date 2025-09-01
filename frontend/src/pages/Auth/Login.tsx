import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/Form/Button/Button";
import * as R from "./styles";
import { useAuthenticateForm } from "./schemas/authenticateSchema";
import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "../../services/userService";
import { AuthDto, AuthResponse } from "../../tdos/user.dto";
import { useAuth } from "../../hooks/Auth/useAuth";

const Login = () => {
  const nav = useNavigate();
  const { setAuth, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAuthenticateForm();

  const mutation = useMutation<AuthResponse, Error, AuthDto>({
    mutationFn: authenticateUser,

    onMutate: () => {
      toast.loading("Autenticando...", { toastId: "auth" });
    },

    onSuccess: ({ user, access_token }) => {
      setAuth(true);
      setUser(user);
      localStorage.setItem("token", access_token.access_token);

      toast.update("auth", {
        render: "Login realizado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      nav("/");
    },

    onError: () => {
      toast.dismiss("auth");
      toast.error("Erro ao fazer login: Usuário ou senha incorretos", {
        autoClose: 3000,
      });
    },
  });

  const onSubmit = (user: AuthDto) => {
    mutation.mutate(user);
  };

  const onError = (errors: unknown) => {
    console.log("Erros de validação:", errors);
  };

  return (
    <R.Container>
      <R.Form onSubmit={handleSubmit(onSubmit, onError)}>
        <R.Title>Faça seu Login</R.Title>

        <R.FormControl>
          <R.LabelForm htmlFor="email">E-mail:</R.LabelForm>
          <R.InputForm
            {...register("email")}
            type="text"
            placeholder="Digite seu e-mail..."
          />
          {errors.email && <R.ErrorText>{errors.email.message}</R.ErrorText>}
        </R.FormControl>

        <R.FormControl>
          <R.LabelForm htmlFor="password">Senha:</R.LabelForm>
          <R.InputForm
            {...register("password")}
            type="password"
            placeholder="Digite sua senha..."
          />
          {errors.password && (
            <R.ErrorText>{errors.password.message}</R.ErrorText>
          )}
        </R.FormControl>

        <R.BtnControl>
          <Button
            type="submit"
            text={mutation.isLoading ? "Autenticando..." : "Entrar"}
            disabled={mutation.isLoading}
          />
        </R.BtnControl>

        <R.Link>
          Não tem conta? <Link to={"/register"}>Clique aqui</Link> para se
          cadastrar
        </R.Link>
      </R.Form>
    </R.Container>
  );
};

export default Login;
