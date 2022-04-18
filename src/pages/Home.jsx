import styled from "styled-components";
// Data
import { projects } from "../data";
// Components
import { Title } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Project from "../components/Home/Project";

const StyledHome = styled.main`
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
