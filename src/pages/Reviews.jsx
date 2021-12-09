import styled from "styled-components";
import { Title } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const StyledReviews = styled.main`
  text-align: center;

  .container {
    width: 80vw;
    max-width: var(--fixed-width);
  }
`;

export default function Reviews() {
  return (
    <>
      <NavBar />
      <SideBar />
      <StyledReviews>
        <section className="section section-center container">
          <Title>
            <h2>Reviews</h2>
            <div className="underline"></div>
          </Title>
        </section>
      </StyledReviews>
    </>
  );
}
