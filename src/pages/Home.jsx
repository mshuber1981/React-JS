import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Title, OuterButton } from "../components/styledComponents";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Home(props) {
  return (
    <>
      <NavBar />
      <main>
        <Title>
          <h1>Home</h1>
          <div className="underline"></div>
        </Title>
        <br />
        <OuterButton type="link" as={Link} to="/Birthday-Reminder">
          Birthday Reminder
        </OuterButton>
        <br />
        <OuterButton type="link" as={Link} to="/Tours">
          Tours
        </OuterButton>
        <br />
        <ToggleSwitch {...props} />
      </main>
    </>
  );
}
