
import LoginForm from "../../components/forms/LoginForm";
import { ContainerForms } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import { StyledLoginPage } from "./styles";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <ContainerForms>
   
        <LoginForm />
        <StyledText tag="h1" fontSize="one">Burgers</StyledText>

      </ContainerForms>
    </StyledLoginPage>
  );
};

export default LoginPage;
