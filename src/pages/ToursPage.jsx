import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTours,
  selectIsLoading,
  selectError,
  selectToursData,
} from "../components/Tours/toursSlice";
import { url } from "../components/Tours/toursSlice";
// Components
import { Loading, OuterButton, Title } from "../components/styledComponents";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Tours from "../components/Tours/Tours";

export default function App() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const tours = useSelector(selectToursData);
  const dispatch = useDispatch();

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
          <p>Check fetch url (toursSlice.js): {url}</p>
        </main>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title>
          <h2>Tours</h2>
          <div className="underline"></div>
        </Title>
        <Tours />
        {tours.length === 0 && (
          <OuterButton onClick={() => dispatch(fetchTours())}>
            Refresh Tours data
          </OuterButton>
        )}
      </main>
    </>
  );
}
