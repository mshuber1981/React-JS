import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const StyledColorGenerator = styled.div``;

export default function ColorGenerator() {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <h2>Color Generator</h2>
      </main>
    </>
  );
}
