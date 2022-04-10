import { useState } from "react";
import styled from "styled-components";
// Data
import { text } from "../data";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { InnerButton, Title } from "../components/styledComponents";

const StyledLoremIpsum = styled.main`
  .lorem-form {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      font-size: 1.25rem;
    }

    input {
      padding: 0.25rem 0.5rem;
      width: 4rem;
      border-radius: var(--radius);
      border: none;
      margin: 0 0.5rem;
      font-size: 1.25rem;
    }
  }

  .lorem-text {
    text-indent: 1rem;
  }
`;

export default function LoremIpsum() {
  const [count, setCount] = useState(0);
  const [textData, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
      setCount(amount);
    }
    setText(text.slice(0, amount));
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledLoremIpsum>
        <Title>
          <h2>Lorem Ipsum</h2>
          <div className="underline"></div>
        </Title>
        <section className="section section-center">
          <form className="lorem-form" onSubmit={handleSubmit}>
            <label htmlFor="amount">Paragraphs:</label>
            <input
              type="number"
              max="8"
              name="amount"
              id="amount"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <InnerButton type="submit">Generate</InnerButton>
          </form>
          <article className="lorem-text">
            {textData.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </article>
        </section>
      </StyledLoremIpsum>
    </>
  );
}
