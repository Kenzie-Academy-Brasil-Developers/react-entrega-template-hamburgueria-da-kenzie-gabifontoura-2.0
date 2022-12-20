import { useContext } from "react";
import { CartContext, iProduct } from "../../providers/CartContext";
import ProductCard from "./ProductCard";

import { StyledProductsList } from "./styles";

const ProductsList = () => {
  const { filteredProducts } = useContext(CartContext);

  return (
    <StyledProductsList>
      {filteredProducts.length > 0 &&
        filteredProducts.map((product: iProduct | any) => (
          <ProductCard
            product={product}
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
          />
        ))}
    </StyledProductsList>
  );
};

export default ProductsList;
