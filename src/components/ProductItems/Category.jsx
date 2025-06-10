import React from "react";

const categories = ["All", "sneakers", "flats", "sandals", "heels"];

const Category = ({ filterByCategory }) => {
  return (
    <div>
      <h3 className="font-bold mb-2">Category</h3>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => filterByCategory(cat)}
            className="text-left  hover:underline"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
