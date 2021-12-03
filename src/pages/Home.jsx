import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { OuterButton } from "../components/buttons";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Home(props) {
  return (
    <>
      <NavBar />
      <main>
        <h1>Home</h1>
        <br />
        {/* <Link to="/Birthday-Reminder"> */}
        <OuterButton as={Link} to="/Birthday-Reminder">
          Birthday Reminder
        </OuterButton>
        {/* </Link> */}
        <br />
        <ToggleSwitch {...props} />
      </main>
    </>
  );
}
