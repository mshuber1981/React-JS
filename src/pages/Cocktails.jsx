// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SearchForm from "../components/Cocktails/SearchForm";

export default function Cocktails() {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <h1>Cocktails</h1>
        <SearchForm />
      </main>
    </>
  );
}
