import React from "react";

function Recommended({ filterItems }) {
  return (
    <div className="px-6 py-4">
      <h2 className="text-3xl font-bold mb-6">Recommended</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => filterItems("All")}
          className="px-4 py-2 border border-gray-400 rounded-xl hover:bg-gray-200 transition"
        >
          All Products
        </button>
        <button
          onClick={() => filterItems("Nike")}
          className="px-4 py-2 border border-gray-400 rounded-xl hover:bg-gray-200 transition"
        >
          Nike
        </button>
        <button
          onClick={() => filterItems("Adidas")}
          className="px-4 py-2 border border-gray-400 rounded-xl hover:bg-gray-200 transition"
        >
          Adidas
        </button>
        <button
          onClick={() => filterItems("Puma")}
          className="px-4 py-2 border border-gray-400 rounded-xl hover:bg-gray-200 transition"
        >
          Puma
        </button>
        <button
          onClick={() => filterItems("Vans")}
          className="px-4 py-2 border border-gray-400 rounded-xl hover:bg-gray-200 transition"
        >
          Vans
        </button>
      </div>
    </div>
  );
}

export default Recommended;
