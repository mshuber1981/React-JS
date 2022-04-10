import React from "react";
import styled from "styled-components";
// Data
import { people } from "../data";
// Components
import { InnerButton, Title } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const StyledBirthdayReminder = styled.main`
  /* text-align: center; */

  .container {
    text-align: left;
    width: 90vw;
    margin: 2rem auto;
    max-width: var(--fixed-width);
    border: 0.15rem solid var(--clr-primary-5);
    border-radius: var(--radius);
    padding: 1.5rem 2rem;
    box-shadow: ${(props) =>
      props.theme.name === "light"
        ? "var(--light-shadow)"
        : "var(--lw-shadow)"};
    background: ${(props) =>
      props.theme.name === "light" ? "var(--clr-grey-9)" : "var(--clr-grey-1)"};
    color: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-grey-10)"};

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
  const [peopleList, setPeople] = React.useState(people);

  function removeItem(id) {
    let newPeopleList = peopleList.filter((person) => person.id !== id);

    setPeople(newPeopleList);
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledBirthdayReminder>
        <Title>
          <h2>Birthday Reminders</h2>
          <div className="underline"></div>
        </Title>
        <section className="section section-center">
          <div className="container">
            <h3>{peopleList.length} birthdays today</h3>
            {peopleList.map(function ({ id, name, age, image }) {
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
            {peopleList.length >= 1 && (
              <InnerButton onClick={() => setPeople([])}>clear all</InnerButton>
            )}
            {peopleList.length === 0 && (
              <InnerButton onClick={() => setPeople([...people])}>
                refresh list
              </InnerButton>
            )}
          </div>
        </section>
      </StyledBirthdayReminder>
    </>
  );
}
