import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { fadeInAnimation } from "../../../animations/fadeInModal";
import AnimationDelay from "../../../components/AnimationDelay.tsx";
import useOutClick from "../../../components/hooks/hookOutClick";
import { CartContext, iProduct } from "../../../providers/CartContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledModalBg, StyledModalBox } from "../../../styles/modal";
import { StyledText } from "../../../styles/typography";

import CartCard from "./CartCard";

import { StyledEmptyCart, StyledTotalCart } from "./styles";

const CartModal = () => {
  const { setIsModalVisible, cart, setCart } = useContext(CartContext);

  const modalRef = useOutClick(() => setIsModalVisible(null));

  const sum = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * Number(currentValue.count);
  }, 0);

  return (
    <StyledModalBg>
      <AnimationDelay keyframe={fadeInAnimation} max={1}>


      <StyledModalBox ref={modalRef}>
        <div className="modal-header">
          <StyledText tag="h3" color="white">
            Carrinho de compras
          </StyledText>
          <CgClose
            color="white"
            onClick={() => {
              setIsModalVisible(false);
            }}
          />
        </div>

        <ul className="cartList">
          {cart.length > 0 ? (
            cart.map((product: iProduct) => (
              <CartCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                img={product.img}
                count={product.count}
                />
                ))
                ) : (
                  <StyledEmptyCart>
              <StyledText tag="h4">Sua sacola está vazia</StyledText>
              <StyledText tag="h5">Adicione itens</StyledText>
            </StyledEmptyCart>
          )}
        </ul>

        {cart.length > 0 ? (
          <StyledTotalCart>
            <div className="flex between">
              <StyledText tag="h4">Total</StyledText>
              <StyledText tag="h4">
                R$ {sum.toFixed(2).replace(".", ",")}
              </StyledText>
            </div>
            <StyledButton
              buttonSize="default"
              buttonStyle="secondary"
              onClick={() => {
                setCart([]);
                setIsModalVisible(false);
              }}
            >
              Remover todos / Finalizar compra
            </StyledButton>
          </StyledTotalCart>
        ) : (
          ""
        )}
      </StyledModalBox>
      
      </AnimationDelay>

    </StyledModalBg>
  );
};

export default CartModal;
