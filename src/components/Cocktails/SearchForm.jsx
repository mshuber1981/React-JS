import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import styled from "styled-components";

const StyledSearchForm = styled.section``;

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
    <StyledSearchForm className="section search">
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
