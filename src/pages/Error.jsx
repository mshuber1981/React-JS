import { Link } from "react-router-dom";
import { Title, OuterButton } from "../components/styledComponents";

export default function Error() {
  return (
    <>
      <main>
        <Title>
          <h2>Sorry, page not found...</h2>
          <div className="underline"></div>
        </Title>
        <br />
        <OuterButton type="link" as={Link} to="/">
          Home
        </OuterButton>
      </main>
    </>
  );
}
