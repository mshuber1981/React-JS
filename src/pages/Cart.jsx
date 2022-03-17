import { useGlobalContext } from "../context";
import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CartNavBar from "../components/Cart/CartNavBar";
import CartContainer from "../components/Cart/CartContainer";

const StyledCart = styled.main`
  .container {
    width: 100%;
  }
`;

export default function Cart() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledCart>
        <div className="container">
          <CartNavBar />
          <CartContainer />
        </div>
      </StyledCart>
    </>
  );
}
