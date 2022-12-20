import LoginForm from "../../components/forms/LoginForm";
import { Container } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import { StyledLoginPage } from "./styles";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Container>
        <div className="flex column padding">
          <StyledText tag="h1" fontSize="one" textAlign="center">
            Burgers
          </StyledText>
          <LoginForm />
        </div>
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
