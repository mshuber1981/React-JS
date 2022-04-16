// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Title } from "../components/styledComponents";
import SearchForm from "../components/Cocktails/SearchForm";
import CocktailList from "../components/Cocktails/CocktailList";

export default function Cocktails() {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title>
          <h2>Cocktails</h2>
          <div className="underline"></div>
        </Title>
        {/* <SearchForm /> */}
        <SearchForm />
        <CocktailList />
      </main>
    </>
  );
}
