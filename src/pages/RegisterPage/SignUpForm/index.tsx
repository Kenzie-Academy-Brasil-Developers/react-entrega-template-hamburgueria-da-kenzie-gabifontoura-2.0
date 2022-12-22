import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../../../styles/buttons";
import { StyledForm } from "../../../styles/forms";
import { StyledText } from "../../../styles/typography";
import InputField from "../../../components/InputField";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../../providers/UserContext";
import { NavLink } from "react-router-dom";

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();

  const { globalLoading, userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    reset();
    userRegister(data);
    navigate("/");
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(submit)}>
      <div className="flex between gap-1rem">
        <StyledText tag="h3" fontSize="three" textAlign="center">
          Crie sua conta
        </StyledText>
        <NavLink to="/" className="main-nav-active">
          Voltar
        </NavLink>
      </div>

      <InputField
        type="text"
        id="name"
        label="Nome"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        disabled={globalLoading}
      />
      {errors.name?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.name.message}
        </StyledText>
      )}

      <InputField
        type="email"
        id="email"
        label="Email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={globalLoading}
      />
      {errors.email?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.email.message}
        </StyledText>
      )}

      <InputField
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disabled={globalLoading}
      />
      {errors.password?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.password.message}
        </StyledText>
      )}

      <InputField
        type="password"
        id="confirmPassword"
        label="Confirmar senha"
        placeholder="Digite novamente sua senha"
        register={register("confirmPassword")}
        disabled={globalLoading}
      />
      {errors.confirmPassword?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.confirmPassword.message}
        </StyledText>
      )}

      <StyledButton
        type="submit"
        buttonSize="default"
        buttonStyle="primary"
        disabled={globalLoading}
      >
        {globalLoading ? "Cadastrando..." : "Cadastrar"}
      </StyledButton>


    </StyledForm>
  );
};

export default SignUpForm;
