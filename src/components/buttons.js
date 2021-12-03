import styled from "styled-components";

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

export const InnerButton = styled(OuterButton)`
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
