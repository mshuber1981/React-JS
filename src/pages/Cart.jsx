import { useGlobalContext } from "../context";
import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CartNavBar from "../components/Cart/CartNavBar";
import CartContainer from "../components/Cart/CartContainer";

const StyledCart = styled.main``;

export default function Cart() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main className="loading">
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledCart>
        <CartNavBar />
        <CartContainer />
      </StyledCart>
    </>
  );
}
