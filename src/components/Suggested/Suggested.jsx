import React, { useState } from "react";
import data5 from "./data5.jsx";
import List from "./List.jsx";

const Suggested = () => {
  const [brandList, setBrandList] = useState(data5);

  const removeShoes = (id) => {
    const newShoes = brandList.filter((brand) => brand.id !== id);
    setBrandList(newShoes);
  };

  if (brandList.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            No brands left
          </h2>
          <button
            onClick={() => setBrandList(data5)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <List brandList={brandList} removeShoes={removeShoes} />
    </main>
  );
};

export default Suggested;
