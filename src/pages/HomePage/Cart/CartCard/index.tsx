import React, { useContext } from "react";

import { StyledCartCard } from "./styles";
import { FaTrash } from "react-icons/fa";
import { iProduct, CartContext } from "../../../../providers/CartContext";
import { StyledButton } from "../../../../styles/buttons";
import { StyledText } from "../../../../styles/typography";

const CartCard = ({
  
  id,
  name,
  category,
  price,
  img,
  count,
}: iProduct) => {
  const { deleteProduct, addProduct, cart, setCart } = useContext(CartContext);

  const product = {
    id,
    name,
    category,
    price,
    img,
    count,
  };

  return (
    <StyledCartCard>
      <div className="flex gap-1rem">
        <img src={img} alt={name} />
        <div className="flex column gap-1rem">
          <StyledText tag="h3" fontSize="three" fontWeight={700} textAlign="left">
            {name}
          </StyledText>

          <div className="flex gap-1rem align-center">
            <StyledText tag="h5" fontWeight={400}>
              R$ {price.toFixed(2).replace(".", ",")}
            </StyledText>
          </div>
        </div>
      </div>

      <div className="flex column gap-1rem end">
        <div className="flex gap-05rem align-center">
          <StyledButton
            buttonStyle="secondary"
            buttonSize="small"
            onClick={() => deleteProduct(product)}
          >
            -
          </StyledButton>
          <StyledText tag="h5">{<span>{count}</span>}</StyledText>
          <StyledButton
            buttonStyle="secondary"
            buttonSize="small"
            onClick={() => addProduct(product)}
          >
            +
          </StyledButton>
        </div>

        <button
          onClick={() =>
            setCart(
              cart.filter((currentProduct) => currentProduct.id !== product.id)
            )
          }
        >
          <FaTrash className="trashIcon"/>
        </button>
      </div>
    </StyledCartCard>
  );
};

export default CartCard;
