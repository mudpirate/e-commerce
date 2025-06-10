import React from "react";
import { FaStar, FaShoppingBag } from "react-icons/fa";
import data from "./ProductItems/data.jsx"; // <- include .js just to be safe

function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {data.map((item, index) => (
        <section
          key={index}
          className="w-72 p-4 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-contain rounded-md"
          />

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-black">{item.title}</h3>

            {/* Rating */}
            <section className="flex justify-between items-center mt-1 text-yellow-500">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="text-sm text-gray-500">{item.reviews}</div>
            </section>

            {/* Price and Bag */}
            <section className="flex justify-between items-center mt-4">
              <div className="text-lg font-semibold text-black">
                <del className="text-gray-400 text-sm mr-1">
                  {item.prevPrice}
                </del>
                <span className="text-xl font-semibold">${item.newPrice}</span>
              </div>
              <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                <FaShoppingBag />
              </button>
            </section>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Card;
