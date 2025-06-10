import React, { useState } from "react";

function List({ brandList, removeShoes }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">Suggested Brands</h1>
      <div className="flex gap-6 justify-center p-6">
        {brandList.map((brand) => (
          <Card key={brand.id} brand={brand} removeShoes={removeShoes} />
        ))}
      </div>
    </>
  );
}

function Card({ brand, removeShoes }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-72 hover:shadow-lg transition-shadow duration-300">
      <img
        src={brand.img}
        alt={brand.title}
        className="h-40 w-full object-cover rounded-xl mb-4"
      />
      <h1 className="text-lg font-semibold text-gray-800">{brand.title}</h1>

      <p className="text-sm text-gray-600 mt-2">
        {readMore ? brand.info : `${brand.info.substring(0, 40)}...`}
      </p>

      <button
        onClick={() => setReadMore(!readMore)}
        className="text-blue-600 text-sm mt-1"
      >
        {readMore ? "Show Less" : "Show More"}
      </button>

      <button
        onClick={() => removeShoes(brand.id)}
        className="p-2 rounded mt-4 bg-white text-black border-2 w-full hover:bg-gray-800 transition"
      >
        Not Interested
      </button>
    </div>
  );
}

export default List;
