import { useContext } from "react";
import { CartContext, iProduct } from "../../providers/CartContext";

import { StyledText } from "../../styles/typography";
import ProductCard from "./ProductCard";

import { StyledProductsList } from "./styles";



const ProductsList = () => {

const { filteredProducts } = useContext(CartContext)

  return (
    <StyledProductsList>
       
      {filteredProducts && filteredProducts.length > 0 ? filteredProducts.map((product: iProduct) => (
        <ProductCard
              key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} img={product.img}          
        /> 
     )) :  
      <StyledText tag="p" fontSize="two" textAlign="center" color="white">Adicione novas tecnologias</StyledText>
      }
    </StyledProductsList>
  );
};

export default ProductsList;

