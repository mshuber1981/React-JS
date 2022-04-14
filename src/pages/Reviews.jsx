import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Title } from "../components/styledComponents";
import Review from "../components/Reviews/Review";

const StyledReviews = styled.main`
  /* text-align: center; */

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
        <Title>
          <h2>Reviews</h2>
          <div className="underline"></div>
        </Title>
        <section className="section section-center container">
          <Review />
        </section>
      </StyledReviews>
    </>
  );
}
