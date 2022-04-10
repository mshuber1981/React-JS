import { useState } from "react";
// Data
import { items } from "../data";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Title } from "../components/styledComponents";
import Categories from "../components/Menu/Categories";
import MenuItems from "../components/Menu/MenuItems";

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
      <main>
        <Title>
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </Title>
        <section className="section">
          <Categories categories={allCategories} filterItems={filterItems} />
          <MenuItems items={menuItems} />
        </section>
      </main>
    </>
  );
}
