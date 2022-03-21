import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Icons
import { FaBars } from "react-icons/fa";
// Media
import logo from "../../media/stripe/logo.svg";

const StyledNavbar = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 1;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);

    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-logo {
        max-height: 5rem;
      }
    }

    .nav-links,
    .signin-btn {
      display: none;
    }

    .btn {
      font-size: 1rem;
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius);
      border-color: transparent;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        background: var(--clr-grey-5);
      }
    }
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      .toggle-btn {
        display: none;
      }

      .signin-btn {
        display: inline-block;
      }

      .nav-links {
        display: block;
        justify-self: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        height: 100%;
        display: grid;
        align-items: center;

        li {
          height: 100%;

          .link-btn {
            height: 100%;
            background: transparent;
            border-color: transparent;
            font-size: 1.1rem;
            color: white;
            text-transform: capitalize;
            letter-spacing: 1px;
            width: 10rem;
          }
        }
      }
    }
  }
`;

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  function displaySubmenu(e) {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }

  function handleSubmenu(e) {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  }

  return (
    <StyledNavbar onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <Link to={"/"}>
          <button className="btn signin-btn">Back to React Projects</button>
        </Link>
      </div>
    </StyledNavbar>
  );
}
