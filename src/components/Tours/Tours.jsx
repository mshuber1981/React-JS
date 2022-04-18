import { useSelector } from "react-redux";
import { selectToursData } from "./toursSlice";
// Components
import Tour from "./Tour";

export default function Tours() {
  const tours = useSelector(selectToursData);

  return (
    <section className="section section-center">
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} />
      ))}
    </section>
  );
}
