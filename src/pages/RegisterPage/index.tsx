
import SignUpForm from '../../components/forms/SignUpForm'
import { ContainerForms } from '../../styles/Containers'
import { StyledText } from '../../styles/typography'
import { StyledRegisterPage } from './styles'

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
    <ContainerForms>
    
      <StyledText tag="h1" fontSize="one">Burgers</StyledText>
      <SignUpForm />

    </ContainerForms>
  </StyledRegisterPage>
  )
}

export default RegisterPage