import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";


import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

import { StyledForm } from "../../../styles/forms";
import { StyledText } from "../../../styles/typography";
import InputField from "../../InputField";
import { StyledButton } from "../../../styles/buttons";
import { UserContext } from "../../../providers/UserContext";


export interface iLoginFormValues{
    email:string;
    password:string;
}

const LoginForm = () => {


  const { userLogin, globalLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledText tag="h3" >
        Login
      </StyledText>

      <InputField
        type="email"
        id="email"
        label="Email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={globalLoading}
      />
      {errors.email?.message && (
        <StyledText tag="p" fontSize="warnText" >
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
        <StyledText tag="p" fontSize="warnText" >
          {errors.password.message}
        </StyledText>
      )}

      <StyledButton
        type="submit"
        buttonStyle="primary"
        buttonSize="default"
        disabled={globalLoading}
      >
        {globalLoading ? "Entrando" : "Entrar"}
      </StyledButton>

      <StyledText tag="p" fontSize="bodyText" textAlign="center">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </StyledText>

      <NavLink to="/register" className="main-nav-active">
        Cadastre-se
      </NavLink>
    </StyledForm>
  );
};

export default LoginForm;