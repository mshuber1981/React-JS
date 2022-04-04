import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SearchForm from "../components/Cocktails/SearchForm";
import CocktailList from "../components/Cocktails/CocktailList";

const StyledCocktails = styled.main`
  display: block;
`;

export default function Cocktails() {
  return (
    <>
      <NavBar />
      <SideBar />
      <StyledCocktails>
        <SearchForm />
        <CocktailList />
      </StyledCocktails>
    </>
  );
}
