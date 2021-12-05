import styled from "styled-components";
import { bounce } from "./styledComponents";
import { FaReact, FaBars } from "react-icons/fa";

const StyledNavBar = styled.nav`
  position: fixed;
  width: 100%;
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};

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

        svg {
          animation: ${bounce} 2s ease-in-out infinite;
        }
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
