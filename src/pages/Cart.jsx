import { useGlobalContext } from "../context";
import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const StyledCart = styled.main``;

export default function Cart() {
  return (
    <>
      <NavBar />
      <SideBar />
      <StyledCart>
        <section className="section">
          <h1>Cart</h1>
        </section>
      </StyledCart>
    </>
  );
}
