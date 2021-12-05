import { useState } from "react";
import { Link } from "react-router-dom";
import { people } from "../data";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { OuterButton, InnerButton } from "../components/buttons";

const StyledBirthdayReminder = styled.main`
  text-align: center;

  .container {
    text-align: left;
    width: 90vw;
    margin: 5rem auto;
    max-width: var(--fixed-width);
    border-radius: var(--radius);
    padding: 1.5rem 2rem;
    box-shadow: ${(props) =>
      props.theme.name === "light"
        ? "var(--light-shadow)"
        : "var(--lw-shadow)"};
    background: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-grey-10)"};
    color: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-10)"
        : "var(--clr-grey-1)"};

    h3 {
      font-weight: normal;
      text-transform: none;
      margin-bottom: 2rem;
    }

    .person {
      display: grid;
      grid-template-columns: auto 1fr auto;
      column-gap: 0.75rem;
      margin-bottom: 1.5rem;
      align-items: center;

      img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: var(--light-shadow);
      }

      h4 {
        margin-bottom: 0.35rem;
      }

      p {
        margin-bottom: 0;
      }
    }

    button {
      width: 100%;
    }
  }
`;

export default function BirthdayReminder() {
  const [peoples, setPeople] = useState(people);

  function removeItem(id) {
    let newPeoples = peoples.filter(function (person) {
      return person.id !== id;
    });

    setPeople(newPeoples);
  }

  return (
    <>
      <NavBar />
      <StyledBirthdayReminder>
        <section className="section section-center">
          <div className="container">
            <h3>{peoples.length} birthdays today</h3>
            {peoples.map((person) => {
              const { id, name, age, image } = person;
              return (
                <article key={id} className="person">
                  <img src={image} alt={name} />
                  <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                  </div>
                  <InnerButton onClick={() => removeItem(id)}>
                    Remove
                  </InnerButton>
                </article>
              );
            })}
            <InnerButton onClick={() => setPeople([])}>clear all</InnerButton>
          </div>
          <OuterButton type="link" as={Link} to="/">
            Home
          </OuterButton>
        </section>
      </StyledBirthdayReminder>
    </>
  );
}
