import styled from "styled-components";
// Data
import { projects } from "../data";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Title } from "../components/styledComponents";
import Project from "../components/Home/Project";

const StyledHome = styled.main`
  text-align: center;

  section {
    padding-top: 0;
  }

  .projects-page-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 2rem 2rem;
    text-align: left;
    margin-top: 2rem;
  }
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <SideBar />
      <StyledHome>
        <Title>
          <h1>React Projects</h1>
          <div className="underline"></div>
        </Title>
        <section className="section">
          <div className="section-center projects-page-center">
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </div>
        </section>
      </StyledHome>
    </>
  );
}
