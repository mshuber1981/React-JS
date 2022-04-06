import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCocktail = styled.article`
  margin-bottom: 2rem;
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--radius);
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-8)" : "var(--clr-grey-2)"};
  box-shadow: ${(props) =>
    props.theme.name === "light" ? "var(--light-shadow)" : "var(--lw-shadow)"};

  &:hover {
    box-shadow: var(--dark-shadow);
    box-shadow: ${(props) =>
      props.theme.name === "light" ? "var(--dark-shadow)" : "var(--dw-shadow)"};
  }

  img {
    height: 20rem;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  .cocktail-footer {
    padding: 1.5rem;

    h3,
    h4,
    p {
      margin-bottom: 0.3rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      margin-bottom: 0.5rem;
    }

    .btn,
    .btn-primary {
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      color: var(--clr-primary-5);
      border: 2px solid var(--clr-primary-5);
      padding: 0.45rem 0.8rem;
      display: inline-block;
      transition: var(--transition);
      cursor: pointer;
      font-size: 0.8rem;
      background: transparent;
      border-radius: var(--radius);
      display: inline-block;

      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }

    .btn-primary {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-color: transparent;

      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-5);
      }
    }

    .btn-details {
      padding: 0.25rem 0.4rem;

      &:hover {
        background: var(--clr-primary-8);
        border-color: var(--clr-primary-5);
      }
    }
  }
`;

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <StyledCocktail className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </StyledCocktail>
  );
}
