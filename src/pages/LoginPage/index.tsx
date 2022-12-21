import LoginForm from "../../components/forms/LoginForm";
import { ContainerForm } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import { StyledLoginPage } from "./styles";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <ContainerForm>
        <StyledText tag="h1" fontSize="one" textAlign="center">
          Burgers
        </StyledText>
        <LoginForm />
      </ContainerForm>
    </StyledLoginPage>
  );
};

export default LoginPage;
