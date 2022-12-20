import SignUpForm from "../../components/forms/SignUpForm";
import { Container } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import { StyledRegisterPage } from "./styles";

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Container>
        <div className="flex column">
          <StyledText tag="h1" fontSize="one" textAlign="center">
            Burgers
          </StyledText>
          <SignUpForm />
        </div>
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
