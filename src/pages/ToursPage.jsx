import { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Loading } from "../components/styledComponents";
import Tours from "../components/Tours/Tours";

const StyledToursPage = styled.div`
  text-align: center;
`;

// const url = "https://course-api.com/react-tours-project";
const url = "https://mshuber1981.github.io/React-JS/tours.json";

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
          throw Error(res.status);
        }
        return res;
      });
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      const errorMessage = `Error: ${error.message}`;
      setLoading(false);
      setError(errorMessage);
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
          <StyledToursPage>
            <h2>{error}</h2>
            <p>Check fetch url: {url}</p>
          </StyledToursPage>
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
