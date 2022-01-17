import React from "react";

const NavBar = ({ categories, filterItems, activeCategory }) => {
  return (
    <div>
      {categories.map((family, index) => {
        return (
          <div
            className={`${
              activeCategory === family ? "filter-btn active " : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(family)}
          >
            {family}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;

