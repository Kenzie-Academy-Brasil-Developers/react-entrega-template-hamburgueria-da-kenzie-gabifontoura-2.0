import React, { useContext } from "react";
import { CartContext, iProduct } from "../../../providers/CartContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledText } from "../../../styles/typography";
import { StyledCartCard } from "./styles";

const CartCard = ({
  product,
  id,
  name,
  category,
  price,
  img,
  count,
}: iProduct | any) => {
  const { deleteProduct, addProduct } = useContext(CartContext);

  return (
    <StyledCartCard>
      <div className="flex gap-1rem">
        <img src={img} alt={name} />
        <div className="flex column gap-1rem">
          <StyledText tag="h3" fontSize="two" fontWeight={700} textAlign="left">
            {name}
          </StyledText>

          <StyledText tag="h5" fontWeight={400}>
            {category}
          </StyledText>
        </div>
      </div>

      <div className="flex column gap-1rem">
        <div className="flex gap-05rem align-center counter">
          <StyledButton
            buttonStyle="primary"
            buttonSize="small"
            onClick={() => deleteProduct(product)}
          >
            -
          </StyledButton>
          <StyledText tag="h5">{<span>{count}</span>}</StyledText>
          <StyledButton
            buttonStyle="primary"
            buttonSize="small"
            onClick={() => addProduct(product)}
          >
            +
          </StyledButton>
        </div>

        <button onClick={() => deleteProduct(product)}>Remover</button>
      </div>
    </StyledCartCard>
  );
};

export default CartCard;
