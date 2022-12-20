import React, { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/UserContext";
import { Container } from "../../styles/Containers";
import { StyledText } from "../../styles/typography";
import InputField from "../InputField";
import { StyledHeader } from "./styles";
import { MdDarkMode, MdLightMode, MdLogout, MdSearch, MdShoppingCart } from "react-icons/md";

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
      <Container>
        <StyledText tag="h1" fontSize="one">
          Burgers
        </StyledText>
        <nav className="nav">
          <InputField
            className="searchBar"
            type="search"
            id="search"
            label=""
            placeholder="Pesquise aqui"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          <MdSearch className="lupa" />
          <MdSearch className="lupa-mobile" />

          <button  onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <MdLightMode className="darkmode" /> : <MdDarkMode className="darkmode"/>}
          </button>

          <button
            className="cartBtn"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            <MdShoppingCart className="cartIcon" />
            <span className="countItens">{sumItens}</span>
          </button>

          <button   onClick={() => userLogout()} ><MdLogout className="exit"/></button>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
