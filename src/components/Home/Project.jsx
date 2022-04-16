import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Icons
import { RiComputerLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
// Animation
import { bounce } from "../styledComponents";

const StyledProject = styled.article`
  display: grid;
  border-radius: var(--radius);
  border: 0.15rem solid var(--clr-primary-5);
  max-width: 90vw;
  height: 30rem;
  transition: var(--transition);
  box-shadow: ${(props) =>
    props.theme.name === "light" ? "var(--light-shadow)" : "var(--lw-shadow)"};
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-8)" : "var(--clr-grey-2)"};
  color: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};

  &:hover {
    box-shadow: ${(props) =>
      props.theme.name === "light" ? "var(--dark-shadow)" : "var(--dw-shadow)"};
  }

  .project-container {
    position: relative;

    img {
      height: 15rem;
      object-fit: cover;
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
    }

    .project-icon {
      position: absolute;
      font-size: 1.75rem;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      background: var(--clr-primary-5);
      border-radius: 50%;
      color: var(--primary-6);
      border: 0.375rem solid var(--clr-primary-5);
      transition: var(--transition);

      &:hover {
        background: var(--clr-primary-7);
      }

      svg {
        animation: ${bounce} 2s ease-in-out infinite;
      }
    }
  }

  .project-details {
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    height: 15rem;
    padding: 1.5rem 1.5rem;

    h4 {
      align-self: center;
      margin-bottom: 0;
    }

    .text-container {
      overflow-y: auto;
    }

    .project-footer {
      font-size: 1.25rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      color: var(--clr-primary-5);
      align-items: center;

      a {
        color: var(--clr-primary-5);
        text-transform: capitalize;
        transition: var(--transition);
        justify-self: end;

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

export default function Project({ name, image, link, description, github }) {
  const { closeSidebar } = useGlobalContext();

  return (
    <StyledProject>
      <div className="project-container">
        <img src={image} alt={name} />
        <Link
          to={link}
          className="project-icon"
          title="Live Demo"
          onClick={closeSidebar}
        >
          <RiComputerLine />
        </Link>
      </div>
      <div className="project-details">
        <h4>{name}</h4>
        <div className="text-container">
          <p>{description}</p>
        </div>
        <div className="project-footer">
          <FaGithub />
          <a href={github} title="GitHub">
            Source Code
          </a>
        </div>
      </div>
    </StyledProject>
  );
}
