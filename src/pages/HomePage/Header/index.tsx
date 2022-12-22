import React, { useContext, useState } from "react";
import { CartContext } from "../../../providers/CartContext";
import { UserContext } from "../../../providers/UserContext";
import { Container } from "../../../styles/Containers";
import { StyledText } from "../../../styles/typography";
import InputField from "../../../components/InputField";
import { StyledHeader } from "./styles";
import {
  MdDarkMode,
  MdLightMode,
  MdLogout,
  MdSearch,
  MdShoppingCart,
} from "react-icons/md";
import AnimationDelay from "../../../components/AnimationDelay.tsx";
import { fadeInAnimation } from "../../../animations/fadeInModal";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);
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

        <div className="searchBar">
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

          <MdSearch className="lupa" />
        </div>

 
          <button onClick={() => setSearchBar(!searchBar)}>
            <MdSearch className="lupa-mobile" />
          </button>
       

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdLightMode className="darkmode" />
          ) : (
            <MdDarkMode className="darkmode" />
          )}
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

        <button onClick={() => userLogout()}>
          <MdLogout className="exit" />
        </button>
      </Container>

      {searchBar && (
        <div className="searchBarMobile">
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
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
