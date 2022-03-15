import { useGlobalContext } from "../../context";
import styled from "styled-components";
// Components
import CartItem from "./CartItem";

const StyledCartContainer = styled.section``;

export default function CartContainer() {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <StyledCartContainer className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </StyledCartContainer>
    );
  }
  return (
    <StyledCartContainer className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </StyledCartContainer>
  );
}
