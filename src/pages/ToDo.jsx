import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const StyledToDo = styled.div``;

export default function ToDo() {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <h2>To Do</h2>
      </main>
    </>
  );
}
