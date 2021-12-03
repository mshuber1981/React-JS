import styled from "styled-components";
import { FaReact, FaBars } from "react-icons/fa";

const StyledNavBar = styled.nav`
  .nav-center {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0.25rem 0;

    .nav-header {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      font-size: 2rem;
      margin: 0 0.5rem;
      color: var(--clr-primary-5);

      .nav-btn {
        line-height: 0;
        background: transparent;
        border-color: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        justify-self: end;
        font-size: 2rem;
      }
    }
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <div className="nav-center">
        <div className="nav-header">
          <FaReact />
          <button type="button" className="nav-btn">
            <FaBars />
          </button>
        </div>
      </div>
    </StyledNavBar>
  );
}
