// import React, { useContext } from "react";
// import { UserContext } from "../../providers/UserContext";
import { StyledText } from "../../styles/typography";
// import ProductCard from "./ProductCard";
import { StyledProductsList } from "./styles";

const ProductsList = () => {

// const { products } = useContext(UserContext);

  return (
    <StyledProductsList>
        <h1>Qualquer coisa</h1>
      {/* {products.length > 0 ? products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
         
        /> */}
      {/* )) :   */}
      <StyledText tag="p" fontSize="two" textAlign="center" color="white">Adicione novas tecnologias</StyledText>
      {/* } */}
    </StyledProductsList>
  );
};

export default ProductsList;
