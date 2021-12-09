import { useState } from "react";
import styled from "styled-components";

const StyledTour = styled.article`
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};
  outline: 0.15rem solid var(--clr-primary-5);
  border-radius: var(--radius);
  margin: 2rem 0;
  box-shadow: ${(props) =>
    props.theme.name === "light" ? "var(--light-shadow)" : "var(--lw-shadow)"};
  transition: var(--transition);

  &:hover {
    box-shadow: ${(props) =>
      props.theme.name === "light" ? "var(--dark-shadow)" : "var(--dw-shadow)"};
  }

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }

  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--clr-primary-5);
    font-size: 1rem;
    cursor: pointer;
    margin: 0 0.25rem;
  }

  .delete-btn {
    display: block;
    width: 200px;
    margin: 1rem auto 0 auto;
    color: var(--clr-red-dark);
    letter-spacing: var(--spacing);
    background: transparent;
    border: 1px solid var(--clr-red-dark);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  footer {
    padding: 1.5rem 2rem;
    text-align: left;

    .tour-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      h4 {
        margin-bottom: 0;
        color: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-10)"
            : "var(--clr-grey-1)"};
      }

      .tour-price {
        color: var(--clr-primary-5);
        background: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-10)"
            : "var(--clr-grey-1)"};
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
      }
    }
  }
`;

export default function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <StyledTour>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </StyledTour>
  );
}
