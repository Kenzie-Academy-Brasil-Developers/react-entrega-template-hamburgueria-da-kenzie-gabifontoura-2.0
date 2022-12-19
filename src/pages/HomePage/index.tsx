import { useContext } from "react";
import CartModal from "../../components/Cart";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { CartContext } from "../../providers/CartContext";
import { ContainerHome } from "../../styles/Containers";

import { StyledHomePage } from "./styles";

const HomePage = () => {
  const { isModalVisible } = useContext(CartContext);
  return (
    <StyledHomePage>
      {isModalVisible && <CartModal />}
      <Header />
      <ContainerHome>
        <ProductsList />
      </ContainerHome>
    </StyledHomePage>
  );
};

export default HomePage;
