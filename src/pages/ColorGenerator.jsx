import { useState } from "react";
import styled from "styled-components";
// https://github.com/noeldelgado/Values.js/
import Values from "values.js";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SingleColor from "../components/Color-Generator/SingleColor";

const StyledColorGenerator = styled.main`
  .container {
    text-align: center;
    display: flex;
    align-items: center;
    height: 100px;
    margin-top: 1rem;

    h3 {
      margin-bottom: 0;
      margin-right: 2rem;
    }

    input {
      border-color: transparent;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }

    input.error {
      border: 2px solid var(--clr-red-dark);
    }

    .btn {
      background: var(--clr-primary-5);
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      border: 2px solid var(--clr-primary-5);
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      text-transform: capitalize;
      transition: var(--transition);
      cursor: pointer;
      background: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-1)"
          : "var(--clr-grey-10)"};
      color: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-10)"
          : "var(--clr-grey-1)"};

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
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      h3 {
        font-size: 1rem;
      }

      input,
      .btn {
        font-size: 0.85rem;
      }
    }
  }

  .colors {
    min-height: calc(100vh - 100px);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));

    .color {
      padding: 1rem 2rem;
      cursor: pointer;
      font-size: 1rem;
      text-transform: none;

      .percent-value,
      .color-value,
      .alert {
        margin-bottom: 0;
        color: var(--clr-black);
      }
    }

    .color-light {
      .color-value,
      .percent-value,
      .alert {
        color: var(--clr-white);
      }
    }
  }
`;

export default function ColorGenerator() {
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("#00d8ff");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#00d8ff").all(10));

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setColor2(color);
      setError(false);
    } catch (error) {
      setError(true);
      setColor("#00d8ff");
      setColor2("#00d8ff");
    }
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledColorGenerator>
        <section className="section container">
          <h3>Color Generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              placeholder="#00d8ff"
              className={`${error ? "error" : null}`}
            />
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </section>
        {error && <h4 className="error">Please enter a valid Hex color</h4>}
        <br />
        <input
          type="color"
          value={color2}
          onChange={function (e) {
            setColor2(e.target.value);
            setColor(e.target.value);
          }}
        />
        <br />
        <h4>Select a color below to copy to clipboard</h4>
        <section className="colors">
          {list.map(function (color, index) {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </section>
      </StyledColorGenerator>
    </>
  );
}
