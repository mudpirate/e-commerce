import React, { useState } from "react";
import data6 from "./data6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function ReviewsData() {
  const [index, setIndex] = useState(0);
  const { name, img, shoe, review } = data6[index];

  const prevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + data6.length) % data6.length;
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % data6.length;
      return newIndex;
    });
  };

  return (
    <div className="h-70 flex  bg-gray-100">
      <div className="bg-white shadow-xl p-6 rounded-xl max-w-md text-center">
        <div className="flex justify-center items-center gap-6 mb-4">
          <button
            onClick={prevPerson}
            className="text-gray-600 hover:text-black"
          >
            <FaChevronLeft size={20} />
          </button>

          <img
            src={img}
            alt={name}
            className="w-24 h-24 object-cover rounded-full border-4 border-blue-400"
          />

          <button
            onClick={nextPerson}
            className="text-gray-600 hover:text-black"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        <h2 className="text-blue-600 text-sm mb-2">{shoe}</h2>
        <p className="text-gray-600 text-sm">{review}</p>
      </div>
    </div>
  );
}

export default ReviewsData;
