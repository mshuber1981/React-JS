import { Link } from "react-router-dom";
import { OuterButton } from "../components/buttons";

export default function Counter() {
  return (
    <>
      <main>
        <h1>404</h1>
        <br />
        <OuterButton as={Link} to="/React-JS/">
          Home
        </OuterButton>
      </main>
    </>
  );
}
