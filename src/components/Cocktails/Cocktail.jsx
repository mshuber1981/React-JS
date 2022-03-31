import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCocktail = styled.article`
  /* background: var(--clr-white); */
  margin-bottom: 2rem;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--radius);

  &:hover {
    box-shadow: var(--dark-shadow);
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
      /* color: var(--darkGrey); */
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
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </StyledCocktail>
  );
}
