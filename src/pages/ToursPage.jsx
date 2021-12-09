import { useState, useEffect } from "react";
import { Loading } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Tours from "../components/Tours/Tours";

const url = "https://course-api.com/react-tours-project";
// const url = "https://mshuber1981.github.io/React-JS/tours.json";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async function () {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url).then(function (res) {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      });
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => fetchTours(), []);

  if (loading) {
    return (
      <>
        <NavBar />
        <SideBar />
        <main>
          <Loading />
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <SideBar />
        <main>
          <h2>{error}</h2>
        </main>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}
