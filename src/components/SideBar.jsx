import React from "react";
import { useGlobalContext } from "../context";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// Data
import { projects, socials } from "../data";
// Icons
import { FaReact, FaTimes } from "react-icons/fa";
// Components
import ToggleSwitch from "../components/ToggleSwitch";

const StyledSideBar = styled.aside`
  font-size: 2rem;
  color: ${(props) =>
    props.theme.name === "light"
      ? "var(--clr-grey-10)"
      : "var(--clr-primary-5)"};
  background: ${(props) =>
    props.theme.name === "light"
      ? "var(--clr-primary-5)"
      : "var(--clr-grey-1)"};
  border-right: 0.15rem solid
    ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-primary-6)"
        : "var(--clr-grey-2)"};

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    .close-btn {
      line-height: 0;
      align-self: center;
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--clr-primary-5);
      transition: var(--transition);
      cursor: pointer;
      color: var(--clr-red-dark);
    }

    .close-btn:hover {
      color: var(--clr-red-light);
    }
  }

  .links {
    overflow-y: auto;
    background: ${(props) =>
      props.theme.name === "light" ? "var(--clr-grey-9)" : "var(--clr-grey-3)"};

    .active {
      color: var(--clr-primary-5);
    }

    a {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      transition: var(--transition);
      letter-spacing: var(--spacing);
      color: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-1)"
          : "var(--clr-grey-10)"};

      &:hover {
        background: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-3)"
            : "var(--clr-grey-8)"};
        color: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-10)"
            : "var(--clr-grey-1)"};
      }
    }
  }

  .container {
    display: grid;
    place-items: center;
    grid-gap: 0.25rem;
    padding: 0.75rem 0;

    .social-icons {
      justify-self: center;
      display: flex;

      a {
        font-size: 1.75rem;
        margin: 0 0.5rem;
        transition: var(--transition);
        color: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-10)"
            : "var(--clr-primary-5)"};

        &:hover {
          color: ${(props) =>
            props.theme.name === "light"
              ? "var(--clr-grey-1)"
              : "var(--clr-grey-10)"};
        }
      }
    }
  }
`;

export default function SideBar() {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();
  const { pathname } = useLocation();
  const ul = React.useRef(null);

  React.useEffect(
    function () {
      for (const li of ul.current.children) {
        const link = li.children[0];

        if (link.hash === `#${pathname}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    },
    [pathname]
  );

  return (
    <StyledSideBar
      className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}
    >
      <div className="sidebar-header">
        <FaReact />
        <button
          type="button"
          className="close-btn"
          onClick={() => closeSideBar()}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links" ref={ul}>
        <li>
          <Link to={"/"} onClick={() => closeSideBar()}>
            Home
          </Link>
        </li>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Link to={project.link} onClick={() => closeSideBar()}>
                {project.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="container">
        <ul className="social-icons">
          {socials.map(function (social) {
            return (
              <li key={social.id}>
                <a href={social.url}>{social.icon}</a>
              </li>
            );
          })}
        </ul>
        <ToggleSwitch />
      </div>
    </StyledSideBar>
  );
}
