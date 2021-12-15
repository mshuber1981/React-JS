import { useState } from "react";
import styled from "styled-components";
import { Title } from "../components/styledComponents";
import { items } from "../data";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const StyledMenu = styled.main`
  text-align: center;
`;

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledMenu>
        <section className="section section-center">
          <Title>
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </Title>
          {/* <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} /> */}
        </section>
      </StyledMenu>
    </>
  );
}
