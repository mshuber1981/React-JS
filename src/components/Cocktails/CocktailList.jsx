import { useGlobalContext } from "../../context";
import styled from "styled-components";
// Components
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const StyledCocktailList = styled.section`
  .section-title {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
  }

  .cocktails-center {
    width: 85vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    row-gap: 2rem;
    column-gap: 2rem;
  }

  @media screen and (min-width: 576px) {
    .cocktails-center {
      grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
    }
  }
`;

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <StyledCocktailList>
        <h2 className="section-title">
          No cocktails matched your search criteria
        </h2>
      </StyledCocktailList>
    );
  }
  return (
    <StyledCocktailList className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </StyledCocktailList>
  );
}
