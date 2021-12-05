import styled from "styled-components";
import { projects } from "../data";
import { Title } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import ToggleSwitch from "../components/ToggleSwitch";
import Project from "../components/Home/Project";

const StyledHome = styled.main`
  text-align: center;

  .projects-page-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 3rem;
    text-align: left;
    margin-top: 2rem;
  }
`;

export default function Home(props) {
  return (
    <>
      <NavBar />
      <StyledHome>
        <section className="section">
          <Title>
            <h1>React Projects</h1>
            <div className="underline"></div>
          </Title>
          <br />
          <ToggleSwitch {...props} />
          <div className="section-center projects-page-center">
            {projects.map(function (project) {
              return <Project key={project.id} {...project} />;
            })}
          </div>
        </section>
      </StyledHome>
    </>
  );
}
