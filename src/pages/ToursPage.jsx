import React from "react";
import styled from "styled-components";
// Components
import { Loading } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Tours from "../components/Tours/Tours";

const StyledToursErrorPage = styled.div`
  text-align: center;
`;

// const url = "https://course-api.com/react-tours-project";
const url = "https://mshuber1981.github.io/React-JS/tours.json";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [tours, setTours] = React.useState([]);

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
          throw new Error(res.status);
        } else if (!url) {
          throw new Error("The fetch url is empty...");
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

  React.useEffect(() => fetchTours(), []);

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
          <StyledToursErrorPage>
            <h2>{error}</h2>
            <p>Check fetch url: {url}</p>
          </StyledToursErrorPage>
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
