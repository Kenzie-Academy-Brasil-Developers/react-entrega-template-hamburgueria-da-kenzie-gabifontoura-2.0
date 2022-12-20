import { useContext } from "react";
import { StyledModalBg, StyledModalBox } from "../../styles/modal";
import { StyledText } from "../../styles/typography";
import { CgClose } from "react-icons/cg";
import { CartContext, iProduct } from "../../providers/CartContext";
import useOutClick from "../../hooks/hookOutClick";
import CartCard from "./CartCard";
import { StyledButton } from "../../styles/buttons";
import { StyledEmptyCart, StyledTotalCart } from "./styles";

const CartModal = () => {
  const { setIsModalVisible, cart, setCart } = useContext(CartContext);

  const modalRef = useOutClick(() => setIsModalVisible(null));

  const sum = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * Number(currentValue.count);
  }, 0);

  return (
    <StyledModalBg>
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

        {cart.length > 0 ? (
          cart.map((product: iProduct | any) => (
            <CartCard
              product={product}
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
              Remover todos
            </StyledButton>
          </StyledTotalCart>
        ) : (
          ""
        )}
      </StyledModalBox>
    </StyledModalBg>
  );
};

export default CartModal;
