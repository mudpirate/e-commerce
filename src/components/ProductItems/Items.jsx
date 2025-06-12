import React, { useState } from "react";
import Products from "./Products.jsx";
import Categories from "./Categories.jsx";
import data from "./data.jsx";
import Filtermenu from "./Filtermenu.jsx";

const ProductsItems = () => {
  const [Product, setProduct] = useState(data);
  const [categories, setCategories] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterByCategory = (category) => {
    setProduct(
      category === "All"
        ? data
        : data.filter((item) => item.category === category)
    );
  };

  const filterByColor = (color) => {
    setProduct(
      color === "All" ? data : data.filter((item) => item.color === color)
    );
  };

  const filterByPrice = ([min, max]) => {
    setProduct(
      data.filter((item) => +item.newPrice >= min && +item.newPrice <= max)
    );
  };

  const filterItems = (company) => {
    if (company === "All") {
      setProduct(data); // Reset to all products
    } else {
      const newItems = data.filter((item) => item.company === company);
      setProduct(newItems);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 sm:p-4">
      {/* Mobile Filter Toggle Button */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="lg:hidden w-full bg-gray-100 p-2 rounded-md mb-2 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
        {isFilterOpen ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Left Sidebar Filters */}
      <aside
        className={`${
          isFilterOpen ? "block" : "hidden"
        } lg:block w-full lg:w-1/4 bg-white rounded-md p-4 lg:p-6 shadow-sm lg:shadow-none lg:sticky lg:top-20 h-fit transition-all duration-300`}
      >
        <Filtermenu
          filterByCategory={filterByCategory}
          filterByColor={filterByColor}
          filterByPrice={filterByPrice}
        />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-full lg:w-3/4">
        <Categories filterItems={filterItems} />
        <main className="w-full">
          <Products Product={Product} />
        </main>
      </div>
    </div>
  );
};

export default ProductsItems;
