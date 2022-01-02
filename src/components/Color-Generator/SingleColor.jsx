import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSingleColor = styled.article`
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;

  .alert {
    text-transform: uppercase;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
`;

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(
    function () {
      const timeout = setTimeout(() => setAlert(false), 1000);
      return () => clearTimeout(timeout);
    },
    [alert]
  );

  return (
    <StyledSingleColor
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={function () {
        setAlert(true);
        // Copy color to clipboard
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </StyledSingleColor>
  );
}
