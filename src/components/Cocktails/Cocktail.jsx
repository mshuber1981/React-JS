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
