import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import styled from "styled-components";

const StyledSearchForm = styled.section`
  margin-top: 1rem;
  padding-bottom: 0;

  .search-form {
    width: 85vw;
    margin: 0 auto;
    max-width: 40rem;
    padding: 2rem 2.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    background: ${(props) =>
      props.theme.name === "light" ? "var(--clr-grey-8)" : "var(--clr-grey-2)"};
    box-shadow: ${(props) =>
      props.theme.name === "light"
        ? "var(--light-shadow)"
        : "var(--lw-shadow)"};
  }

  .form-control {
    label {
      display: block;
      margin-bottom: 1.25rem;
      font-weight: bold;
      letter-spacing: 0.25rem;
      color: var(--clr-primary-5);
    }

    input {
      width: 100%;
      border: none;
      border-color: var(--clr-primary-5);
      /* background: var(--mainBackground); */
      border-radius: var(--radius);
      padding: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <StyledSearchForm className="section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </StyledSearchForm>
  );
}
