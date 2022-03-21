import { useGlobalContext } from "../../context";
import styled from "styled-components";
// Data
import { sublinks } from "../../data";
// Icons
import { FaTimes } from "react-icons/fa";

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  z-index: -1;
  transition: var(--transition);
  transform: scale(0);
  background: rgba(0, 0, 0, 0.5);

  .stripe-sidebar {
    width: 90vw;
    height: 95vh;
    max-width: var(--fixed-width);
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    position: relative;
    padding: 4rem 2rem;

    .close-btn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--clr-grey-5);
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }

    h4 {
      color: var(--clr-grey-1);
    }

    article {
      margin-bottom: 2rem;

      .sidebar-sublinks {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 0.25rem;

        a {
          display: block;
          color: var(--clr-grey-1);
          text-transform: capitalize;
          display: flex;
          align-items: center;
        }

        svg {
          color: var(--clr-grey-5);
          margin-right: 1rem;
        }
      }
    }
  }
`;

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <StyledSidebar
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="stripe-sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </StyledSidebar>
  );
}
