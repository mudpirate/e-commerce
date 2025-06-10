import React from "react";
import Category from "./Category";
import Colors from "./Colors";
import Price from "./Price";

const Filtermenu = ({ filterByCategory, filterByColor, filterByPrice }) => {
  return (
    <aside className="w-64 bg-white p-4 shadow-md h-full flex flex-col gap-6 ">
      <h2 className="text-xl font-bold">Filters</h2>
      <Category filterByCategory={filterByCategory} />
      <Colors filterByColor={filterByColor} />
      <Price filterByPrice={filterByPrice} />
    </aside>
  );
};

export default Filtermenu;
