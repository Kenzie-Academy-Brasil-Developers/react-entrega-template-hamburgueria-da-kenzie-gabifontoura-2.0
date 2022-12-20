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
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { userLogout, darkMode, setDarkMode } = useContext(UserContext);
  const { search, setSearch, setIsModalVisible, cart } =
    useContext(CartContext);

  const count = cart.map((product) => {
    return product.count;
  });

  const sumItens = count.reduce(
    (accumulator: number | undefined, currentValue: number | undefined) => {
      return Number(accumulator) + Number(currentValue);
    },
    0
  );

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
              setSearch(event.target.value);
            }}
          />

          <ImSearch className="lupa" />

          <button className="darkmode" onClick={() => setDarkMode(!darkMode)}>{ darkMode ? <MdLightMode /> : <MdDarkMode  /> }</button>

          <div
            className="cart"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            <RiShoppingCart2Fill className="cartIcon" />

            <span className="countItens">{sumItens}</span>
          </div>

          <RxExit className="exit" onClick={() => userLogout()} />
        </nav>
      </ContainerHome>
    </StyledHeader>
  );
};

export default Header;
