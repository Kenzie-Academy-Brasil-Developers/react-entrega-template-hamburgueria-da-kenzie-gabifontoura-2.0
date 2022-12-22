import SignUpForm from "./SignUpForm";
import { ContainerForm } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import { StyledRegisterPage } from "./styles";

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <ContainerForm>
        <StyledText tag="h1" fontSize="one" textAlign="center">
          Burgers
        </StyledText>
        <SignUpForm />
      </ContainerForm>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
