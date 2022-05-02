import { useGlobalContext } from "../context";
import styled from "styled-components";
// Icons
import { FaReact, FaBars } from "react-icons/fa";
// Animation
import { bounce } from "./styledComponents";

const StyledSpacer = styled.div`
  height: var(--nav-height);
`;

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  background: ${(props) =>
    props.theme.name === "light"
      ? "var(--clr-primary-5)"
      : "var(--clr-grey-1)"};
  box-shadow: ${(props) =>
    props.theme.name === "light" ? "var(--light-shadow)" : "var(--lw-shadow)"};

  .nav-center {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0.25rem 0;

    .nav-header {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      font-size: 2rem;
      margin: 0 0.5rem;
      color: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-10)"
          : "var(--clr-primary-5)"};

      .nav-btn {
        line-height: 0;
        background: transparent;
        border-color: transparent;
        color: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-10)"
            : "var(--clr-primary-5)"};
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
  const { openSideBar } = useGlobalContext();

  return (
    <>
      <StyledSpacer />
      <StyledNavBar>
        <div className="nav-center">
          <div className="nav-header">
            <FaReact />
            <button
              type="button"
              className="nav-btn"
              onClick={() => openSideBar()}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </StyledNavBar>
    </>
  );
}
