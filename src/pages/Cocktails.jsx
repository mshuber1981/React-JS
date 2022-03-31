import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SearchForm from "../components/Cocktails/SearchForm";
import CocktailList from "../components/Cocktails/CocktailList";

const StyledCocktails = styled.main`
  display: block;

  .btn,
  .btn-white,
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

  .btn-white {
    background: transparent;
    color: var(--clr-white);
    border-color: var(--clr-white);

    &:hover {
      background: var(--clr-white);
      color: var(--clr-primary-5);
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

  .btn-block {
    width: 100%;
    display: block;
    margin: 0 auto;
    box-shadow: var(--light-shadow);
    text-align: center;
  }

  .btn-details {
    padding: 0.25rem 0.4rem;

    &:hover {
      background: var(--clr-primary-8);
      border-color: var(--clr-primary-5);
    }
  }
`;

export default function Cocktails() {
  return (
    <>
      <NavBar />
      <SideBar />
      <StyledCocktails>
        <SearchForm />
        <CocktailList />
      </StyledCocktails>
    </>
  );
}
