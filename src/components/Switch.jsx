import styled from "styled-components";
import { GiSunflower, GiMoon } from "react-icons/gi";

const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  line-height: 0;
  height: 2rem;
  width: 4rem;
  font-size: 2rem;
  border-radius: 30px;
  margin: 0 0.25rem;
  transition: var(--transition);
  background: ${(props) =>
    props.theme.name === "light" ? "hsl(209, 61%, 16%)" : "hsl(210, 36%, 96%)"};
  color: ${(props) =>
    props.theme.name === "light" ? "hsl(210, 36%, 96%)" : "hsl(209, 61%, 16%)"};

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + span {
    transform: translateX(100%);
  }

  span {
    line-height: 0;
    transition: var(--transition);
  }
`;

export default function Switch(props) {
  return (
    <StyledSwitch>
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${props.theme}.`}
        onClick={props.toggleTheme}
      />
      <span>{props.theme === "light" ? <GiSunflower /> : <GiMoon />}</span>
    </StyledSwitch>
  );
}
