import styled from "styled-components";
// Components
import { InnerButton } from "../styledComponents";

const StyledCategories = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .filter-btn {
    margin: 0.5rem 0.5rem;
  }
`;

export default function Categories({ categories, filterItems }) {
  return (
    <StyledCategories>
      {categories.map((category, index) => {
        return (
          <InnerButton
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </InnerButton>
        );
      })}
    </StyledCategories>
  );
}
