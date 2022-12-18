import { StyledButton } from "../../../styles/buttons";
import { StyledText } from "../../../styles/typography";
import { StyledProductCard } from "./styles";

export interface iCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  };
}

const ProductCard = ({ product }: iCardProps) => {
  return (
    <StyledProductCard>
      <img src={product.img} alt={product.name} />
      <div className="content">
        <StyledText
          tag="h3"
          fontSize="one"
          fontWeight={700}
          textAlign="left"
          //   color={({ theme }) => theme.colors.colorGrey4}
        >
          {product.name}
        </StyledText>

        <StyledText
          tag="p"
          fontSize="three"
          fontWeight={400}
          textAlign="left"
          //   color={({ theme }) => theme.colors.colorGrey3}
        >
          {product.category}
        </StyledText>

        <StyledText
          tag="p"
          fontSize="two"
          fontWeight={700}
          textAlign="left"
          //   color={({ theme }) => theme.colors.colorBrand1}
        >
          R$ {product.price.toFixed(2).replace(".", ",")}
        </StyledText>

        <StyledButton buttonSize="medium" buttonStyle="primary">
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
