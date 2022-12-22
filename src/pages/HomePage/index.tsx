import { useContext } from "react";

import Header from "./Header";
import ProductsList from "./ProductsList";
import { CartContext } from "../../providers/CartContext";
import { Container } from "../../styles/Containers";
import { StyledHomePage } from "./styles";
import CartModal from "./Cart";

const HomePage = () => {
  const { isModalVisible } = useContext(CartContext);
  return (
    <StyledHomePage>
      {isModalVisible && <CartModal />}
      <Header />
      <Container>
        <ProductsList />
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
