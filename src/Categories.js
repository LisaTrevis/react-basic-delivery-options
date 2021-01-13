import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="category-btns">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
