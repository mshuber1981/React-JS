import { useGlobalContext } from "../../context";
// Components
import Loading from "./Loading";
import Cocktail from "./Cocktail";

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <section>
        <h2 className="section-title">
          No cocktails matched your search criteria
        </h2>
      </section>
    );
  }
  return (
    <section className="section">
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
