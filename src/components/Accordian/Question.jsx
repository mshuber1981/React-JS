import { useState } from "react";
import styled from "styled-components";
// Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const StyledQuestion = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid
    ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-grey-10)"};
  margin-bottom: 1rem;
  border-radius: var(--radius);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      text-transform: none;
      line-height: 1.5;
      margin-bottom: 0;
    }

    .btn {
      background: transparent;
      border-color: transparent;
      width: 2rem;
      height: 2rem;
      background: var(--clr-primary-5);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      margin-left: 1rem;
      align-self: center;
      min-width: 2rem;
    }
  }

  p {
    color: ${(props) =>
      props.theme.name === "light" ? "var(--clr-grey-2)" : "var(--clr-grey-9)"};
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
`;

export default function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <StyledQuestion>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </StyledQuestion>
  );
}
