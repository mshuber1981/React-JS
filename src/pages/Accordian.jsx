import styled from "styled-components";
// Data
import { questions } from "../data";
// Components
import { Title } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Question from "../components/Accordian/Question";

const StyledAccordian = styled.main`
  .container {
    width: 90vw;
    border-radius: var(--radius);
    border: 0.15rem solid var(--clr-primary-5);
    padding: 2.5rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;
    background: ${({ theme }) =>
      theme.name === "light" ? "var(--clr-grey-9)" : "var(--clr-grey-1)"};
    color: ${({ theme }) =>
      theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};
    box-shadow: ${({ theme }) =>
      theme.name === "light" ? "var(--light-shadow)" : "var(--lw-shadow)"};

    h3 {
      line-height: 1.2;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
  }
`;

export default function Accordian() {
  return (
    <>
      <NavBar />
      <SideBar />
      <StyledAccordian>
        <Title>
          <h2>Accordian</h2>
          <div className="underline" />
        </Title>
        <section className="section">
          <div className="container">
            <h3>Questions and answers about login</h3>
            <div>
              {questions.map((questions) => (
                <Question key={questions.id} {...questions} />
              ))}
            </div>
          </div>
        </section>
      </StyledAccordian>
    </>
  );
}
