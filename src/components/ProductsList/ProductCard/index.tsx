import { useContext } from "react";
import { CartContext, iProduct } from "../../../providers/CartContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledText } from "../../../styles/typography";
import { StyledProductCard } from "./styles";

const ProductCard = ({ id, name, category, price, img, count }: iProduct) => {
  const product = {
    id,
    name,
    category,
    price,
    img,
    count,
  };

  const { addProduct } = useContext(CartContext);
  return (
    <StyledProductCard>
      <img src={img} alt={name} />
      <div className="content">
        <StyledText tag="h3" fontSize="two" fontWeight={700} textAlign="left">
          {name}
        </StyledText>

        <StyledText tag="p" fontSize="four" fontWeight={400} textAlign="left">
          {category}
        </StyledText>

        <StyledText tag="p" fontSize="three" fontWeight={600} textAlign="left">
          R$ {price.toFixed(2).replace(".", ",")}
        </StyledText>

        <StyledButton
          buttonSize="medium"
          buttonStyle="primary"
          onClick={() => addProduct(product)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
