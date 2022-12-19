import React, { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/UserContext";
import { ContainerHome } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import InputField from "../InputField";
import { StyledHeader } from "./styles";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { ImSearch } from "react-icons/im";
import { RxExit } from "react-icons/rx";

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const { search, setSearch } = useContext(CartContext);

  return (
    <StyledHeader>
      <ContainerHome>
        <StyledText tag="h1" fontSize="one">
          Burgers
        </StyledText>
        <nav className="nav">
          <InputField
            type="search"
            id="search"
            label=""
            placeholder="Pesquise aqui"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)}}
          />

          <ImSearch className="lupa" />

          <RiShoppingCart2Fill className="cartIcon" />

          <RxExit className="exit" onClick={() => userLogout()} />
         
        </nav>
      </ContainerHome>
    </StyledHeader>
  );
};

export default Header;
