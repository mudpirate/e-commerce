import React from "react";
import data3 from "../db/data3.jsx";
import data4 from "../db/data4.jsx";
import { FaShoppingBag } from "react-icons/fa";
import men from "../db/men.jpg";
import women from "../db/women.jpg";
import kid from "../db/kid.jpg";

function Hero() {
  return (
    <div className="bg-gray-50 py-10">
      {/* FEATURED ITEMS */}
      <div className="text-center font-bold text-5xl text-black mb-10">
        FEATURED ITEMS
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {data3.map((item, index) => (
          <section
            key={index}
            className="w-72 p-5 bg-white shadow-md hover:shadow-xl rounded-xl transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-contain rounded-md"
            />
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-black">
                  <del className="text-gray-400 text-sm mr-1">
                    {item.prevPrice}
                  </del>
                  ${item.newPrice}
                </span>
                <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                  <FaShoppingBag />
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CATEGORY SECTION */}
      <div className="text-center font-bold text-3xl text-gray-800 mt-20 mb-10">
        Shop By Category
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {[
          { img: men, title: "Men" },
          { img: women, title: "Women" },
          { img: kid, title: "Kid" },
        ].map((cat, index) => (
          <section key={index} className="">
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-80 object-contain rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-center text-gray-800">
              {cat.title}
            </h3>
          </section>
        ))}
      </div>

      {/* TRENDING ITEMS */}
      <div className="text-center font-bold text-3xl text-gray-800 mt-20 mb-10">
        TRENDING ITEMS
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {data4.map((item, index) => (
          <section
            key={index}
            className="w-72 p-5 bg-white shadow-md hover:shadow-xl rounded-xl transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-contain rounded-md"
            />
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-black">
                  <del className="text-gray-400 text-sm mr-1">
                    {item.prevPrice}
                  </del>
                  ${item.newPrice}
                </span>
                <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                  <FaShoppingBag />
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Hero;
