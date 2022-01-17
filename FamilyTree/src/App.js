import React, { useState } from "react";
import "./App.css";
import FamilyMembers from "./FamilyMembers";
import NavBar from "./NavBar";
import MemberDetails from "./MemberDetails";
let memberTree = require("./tree.json");

const allCategories = [
  "Wszyscy",
  ...new Set(memberTree.map((item) => item.family)),
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [menuItems, setMenuItems] = useState(memberTree);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);
  const [filter, setFilter] = useState("");

  const filterItems = (family) => {
    setActiveCategory(family);
    if (family === "Wszyscy") {
      setMenuItems(memberTree);
      return;
    }
    const newItems = memberTree.filter((item) =>
      item.name
        .concat(" ", item.family)
        .toLowerCase()
        .includes(family.toLowerCase())
    );
    setMenuItems(newItems);
  };

  function handleTextareaChange(e) {
    setFilter(e.target.value);
    filterItems(e.target.value);
  }

  return (
    <>
      <div id="Content">
        <div id="RightBar">
          <div className="SearchBar">
            <input
              type="text"
              value={filter}
              placeholder="Wyszukaj"
              onChange={handleTextareaChange}
            />
          </div>

          <div className="Families">
            <NavBar
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
          </div>
        </div>
        <div id="LeftBar">
          <div className="FamilyMembers">
            {selected ? (
              <MemberDetails memberTree={menuItems} selected={selected} />
            ) : (
              <FamilyMembers memberTree={menuItems} setSelected={setSelected} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
