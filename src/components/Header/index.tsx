import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/buttons";
import { ContainerHome } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import InputField from "../InputField";
import { StyledHeader } from "./styles";

export interface iSearchValues {
  search: string;
}
const Header = () => {

  const { userLogout } = useContext(UserContext);
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledText tag="h1" fontSize="one">
          Burgers
        </StyledText>
        <div className="flex">

            <div className="flex align-center">
              <InputField
                type="text"
                id="search"
                label=""
                placeholder="Pesquise aqui"
              />
              <StyledButton buttonSize="medium" buttonStyle="primary">
                Pesquisar
              </StyledButton>
            </div>

                <StyledButton
                  buttonSize="medium"
                  buttonStyle="darkGrey"
                  onClick={() => userLogout()}
                >
                  Sair
                </StyledButton>
        </div>
      </ContainerHome>
    </StyledHeader>
  );
};

export default Header;
