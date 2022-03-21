import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import styled from "styled-components";

const StyledSubmenu = styled.aside`
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  background: var(--clr-white);
  box-shadow: var(--dark-shadow);
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: none;
  padding: 2rem;
  border-radius: var(--radius);
  transition: var(--transition);

  h4 {
    color: var(--clr-grey-1);
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }

  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;

    a {
      width: 10rem;
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

  .col-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function Submenu() {
  const [columns, setColumns] = useState("col-2");
  const container = useRef(null);
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();

  useEffect(
    function () {
      setColumns("col-2");
      const submenu = container.current;
      const { center, bottom } = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      if (links.length === 3) {
        setColumns("col-3");
      }
      if (links.length > 3) {
        setColumns("col-4");
      }
    },
    [page, location, links]
  );
  return (
    <StyledSubmenu
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
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
      </section>
    </StyledSubmenu>
  );
}
