import { useContext } from "react";
import { CartContext, iProduct } from "../../../providers/CartContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledText } from "../../../styles/typography";
import { StyledProductCard } from "./styles";



const ProductCard = ({product, id, name, category, price, img }: iProduct | any) => {


  const { addProduct } = useContext(CartContext);
  return (
    <StyledProductCard>
      <img src={img} alt={name} />
      <div className="content">
        <StyledText
          tag="h3"
          fontSize="one"
          fontWeight={700}
          textAlign="left"
          
        >
          {name}
        </StyledText>

        <StyledText
          tag="p"
          fontSize="three"
          fontWeight={400}
          textAlign="left"
          
        >
          {category}
        </StyledText>

        <StyledText
          tag="p"
          fontSize="two"
          fontWeight={700}
          textAlign="left"
         
        >
          R$ {price.toFixed(2).replace(".", ",")}
        </StyledText>

        <StyledButton buttonSize="medium" buttonStyle="primary" onClick={()=>addProduct(product)}>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
