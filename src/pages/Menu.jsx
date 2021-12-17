import { useState } from "react";
import styled from "styled-components";
import { Title } from "../components/styledComponents";
import { items } from "../data";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Categories from "../components/Menu/Categories";
import MenuItems from "../components/Menu/MenuItems";

const StyledMenu = styled.main`
  text-align: center;
`;

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Menu() {
  const [menuItems, setMenuItems] = useState(items);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledMenu>
        <section className="section">
          <Title>
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </Title>
          <Categories categories={allCategories} filterItems={filterItems} />
          <MenuItems items={menuItems} />
        </section>
      </StyledMenu>
    </>
  );
}
