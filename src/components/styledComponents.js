import styled, { keyframes } from "styled-components";

// Animations
const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

// Animations
export const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
`;

// Titles
export const Title = styled.div`
  display: inline-block;
  .underline {
    height: 0.25rem;
    background: var(--clr-primary-5);
    margin: 0.5rem auto;
  }
`;

// Buttons
export const OuterButton = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  text-transform: uppercase;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 1rem;
  border: 2px solid var(--clr-primary-5);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-10)" : "var(--clr-grey-1)"};
  color: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};

  &:hover {
    color: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-10)"
        : "var(--clr-grey-1)"};
    background: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-grey-10)"};
  }
`;

export const InnerButton = styled(OuterButton)`
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};
  color: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-10)" : "var(--clr-grey-1)"};

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
`;

// Spinnners
export const Loading = styled.div`
  width: 5rem;
  height: 5rem;
  border: 5px solid
    ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-grey-10)"};
  border-radius: 50%;
  border-top-color: var(--clr-primary-5);
  margin: 1rem 0;
  animation: ${spin} 0.6s linear infinite;
`;
