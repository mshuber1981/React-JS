import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
// Components
import Loading from "../components/Cocktails/Loading";

const StyledSingleCocktail = styled.main`
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
`;

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return (
      <StyledSingleCocktail>
        <Loading />
      </StyledSingleCocktail>
    );
  }

  if (!cocktail) {
    return (
      <StyledSingleCocktail>
        <h2 className="section-title">no cocktail to display</h2>
        <Link to="/Cocktails" className="btn btn-primary">
          Back to search
        </Link>
      </StyledSingleCocktail>
    );
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;

    return (
      <StyledSingleCocktail>
        <section className="section cocktail-section">
          <Link to="/Cocktails" className="btn btn-primary">
            Back to search
          </Link>
          <h2 className="section-title">{name}</h2>
          <div className="drink">
            <img src={image} alt={name}></img>
            <div className="drink-info">
              <p>
                <span className="drink-data">name :</span> {name}
              </p>
              <p>
                <span className="drink-data">category :</span> {category}
              </p>
              <p>
                <span className="drink-data">info :</span> {info}
              </p>
              <p>
                <span className="drink-data">glass :</span> {glass}
              </p>
              <p>
                <span className="drink-data">instructons :</span> {instructions}
              </p>
              <p>
                <span className="drink-data">ingredients :</span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null;
                })}
              </p>
            </div>
          </div>
        </section>
      </StyledSingleCocktail>
    );
  }
}
