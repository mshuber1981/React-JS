import { useGlobalContext } from "../context";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CartNavBar from "../components/Cart/CartNavBar";
import CartContainer from "../components/Cart/CartContainer";

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
      <CartNavBar />
      <main>
        <CartContainer />
      </main>
    </>
  );
}
