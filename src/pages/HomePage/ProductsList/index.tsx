import { useContext } from "react";
import { fadeInCardsAnimation } from "../../../animations/fadeIn";
import AnimationDelay from "../../../components/AnimationDelay.tsx";
import { CartContext, iProduct } from "../../../providers/CartContext";
import ProductCard from "./ProductCard";
import { StyledProductsList } from "./styles";

const ProductsList = () => {
  const { filteredProducts } = useContext(CartContext);

  return (
    <StyledProductsList>
            {filteredProducts.length > 0 &&
              filteredProducts.map((product: iProduct) => (
              <AnimationDelay keyframe={fadeInCardsAnimation} max={filteredProducts.length}>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  img={product.img}
                />
              </AnimationDelay>
              ))}
        </StyledProductsList>
  );
};

export default ProductsList;
