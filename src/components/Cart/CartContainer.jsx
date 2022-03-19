import { useGlobalContext } from "../../context";
import styled from "styled-components";
// Components
import CartItem from "./CartItem";

const StyledCartContainer = styled.section`
  h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }
  .empty-cart {
    text-transform: lowercase;
    color: var(--clr-grey-5);
    margin-top: 1rem;
    text-align: center;
  }

  footer {
    margin-top: 4rem;
    text-align: center;

    .cart-total h4 {
      text-transform: capitalize;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }

    .clear-btn {
      background: transparent;
      padding: 0.5rem 1rem;
      color: var(--clr-red-dark);
      border: 1px solid var(--clr-red-dark);
      margin-top: 2.25rem;
      border-radius: var(--radius);

      &:hover {
        background: var(--clr-red-light);
        color: var(--clr-red-dark);
        border-color: var(--clr-red-light);
      }
    }
  }
`;

export default function CartContainer() {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <StyledCartContainer className="section section-center cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </StyledCartContainer>
    );
  }
  return (
    <StyledCartContainer className="section section-center cart">
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
