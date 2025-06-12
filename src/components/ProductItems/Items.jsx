import React, { useState } from "react";
import Products from "./Products.jsx";
import Categories from "./Categories.jsx";
import data from "./data.jsx";
import Filtermenu from "./Filtermenu.jsx";

const ProductsItems = () => {
  const [Product, setProduct] = useState(data);
  const [categories, setCategories] = useState([]);

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
    <div className="flex lg:flex-row gap-6 p-4">
      {/* Left Sidebar Filters */}
      <aside className="w-full lg:w-1/4 bg-white rounded-md p-0  top-2 h-fit">
        <Filtermenu
          filterByCategory={filterByCategory}
          filterByColor={filterByColor}
          filterByPrice={filterByPrice}
        />
      </aside>
      <div className="flex flex-col">
        <Categories filterItems={filterItems} />
        {/* Right Content Products */}
        <main className="w-full">
          <Products Product={Product} />
        </main>
      </div>
    </div>
  );
};

export default ProductsItems;
