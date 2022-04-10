// Components
import { Title } from "../styledComponents";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <main>
      <Title>
        <h2>Tours</h2>
        <div className="underline"></div>
      </Title>
      <section className="section section-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </section>
    </main>
  );
}
