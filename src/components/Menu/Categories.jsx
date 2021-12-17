import styled from "styled-components";

const StyledCategories = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .filter-btn {
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0.5rem 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--clr-gold);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
    border: 2px solid var(--clr-primary-5);
    background: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-grey-10)"};
    color: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-10)"
        : "var(--clr-grey-1)"};

    &:hover {
      color: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-1)"
          : "var(--clr-grey-10)"};
      background: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-10)"
          : "var(--clr-grey-1)"};
    }
  }
`;

export default function Categories({ categories, filterItems }) {
  return (
    <StyledCategories>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </StyledCategories>
  );
}
