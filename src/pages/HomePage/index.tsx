import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { ContainerHome } from "../../styles/Containers";

import { StyledHomePage } from "./styles";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <ContainerHome>
        <ProductsList />
      </ContainerHome>
    </StyledHomePage>
  );
};

export default HomePage;
