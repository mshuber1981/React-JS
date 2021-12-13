import { useGlobalContext } from "../context";
import styled from "styled-components";
import { GiSunflower, GiMoon } from "react-icons/gi";

const StyledSwitch = styled.label`
  /* Slider pill */
  display: inline-flex;
  align-items: center;
  height: 2.1rem;
  width: 4.1rem;
  font-size: 1.9rem;
  border-radius: 30px;
  margin: 0.25rem;
  transition: var(--transition);
  border: 2px solid
    ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-primary-5)"};
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-10)" : "var(--clr-grey-1)"};
  color: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
`;

export default function ToggleSwitch() {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <StyledSwitch>
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={toggleTheme}
      />
      <div>{theme === "light" ? <GiSunflower /> : <GiMoon />}</div>
    </StyledSwitch>
  );
}
