import styled from "styled-components";
import { Title } from "../styledComponents";
import Tour from "./Tour";

const StyledTours = styled.main`
  section {
    text-align: center;
  }
`;

export default function Tours({ tours, removeTour }) {
  return (
    <StyledTours>
      <section className="section section-center">
        <Title>
          <h2>Tours</h2>
          <div className="underline"></div>
        </Title>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </section>
    </StyledTours>
  );
}
