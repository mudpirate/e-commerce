import React from "react";
import data3 from "../db/data3.jsx";
import data4 from "../db/data4.jsx";
import { FaShoppingBag } from "react-icons/fa";
import men from "../db/men.jpg";
import women from "../db/women.jpg";
import kid from "../db/kid.jpg";
import { useAppContext } from "../context/AppContext";

function Hero() {
  const { addToCart } = useAppContext();

  const handleAddToCart = (item, type) => {
    const cartItem = {
      id: `${type}-${item.id || Math.random().toString(36).substr(2, 9)}`,
      title: item.title,
      img: item.img,
      newPrice: item.newPrice,
      prevPrice: item.prevPrice,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div className="bg-gray-50 py-6 sm:py-10">
      {/* FEATURED ITEMS */}
      <div className="text-center mb-12 sm:mb-16 py-6 rounded-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          FEATURED ITEMS
        </h2>
        <p className="mt-4 text-black font-semibold underline text-sm sm:text-base">
          Discover our latest collection of premium footwear
        </p>
      </div>

      <div className="flex bg-gray-100 p-10 flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
        {data3.map((item, index) => (
          <section
            key={index}
            className="w-[280px] sm:w-72 p-3 sm:p-5 bg-white shadow-md hover:shadow-xl rounded-xl transition duration-300"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 sm:h-48 object-contain rounded-md transform hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg"
              />
            </div>
            <div className="mt-3 sm:mt-4 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-bold text-black">
                  <del className="text-gray-400 text-xs sm:text-sm mr-1">
                    {item.prevPrice}
                  </del>
                  ${item.newPrice}
                </span>
                <button
                  onClick={() => handleAddToCart(item, "featured")}
                  className="bg-black text-white p-1.5 sm:p-2 rounded-full hover:bg-gray-800 transition group"
                >
                  <FaShoppingBag className="text-sm sm:text-base group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CATEGORY SECTION */}
      <div className="text-center mb-3 mt-9 sm:mb-16 py-6 rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-black">
          CATEGORIES
        </h2>
        <p className="mt-4 text-black font-semibold underline text-sm sm:text-base">
          Explore our wide range of footwear categories
        </p>
      </div>

      <div className="flex bg-gray-100 p-10 flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
        {[
          { img: men, title: "Men" },
          { img: women, title: "Women" },
          { img: kid, title: "Kid" },
        ].map((cat, index) => (
          <section key={index} className=" bg-gray-100 w-[280px] sm:w-72">
            <div className="overflow-hidden rounded-md">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-60 sm:h-80 object-contain rounded-md transform hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg"
              />
            </div>
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-center text-gray-800">
              {cat.title}
            </h3>
          </section>
        ))}
      </div>

      {/* TRENDING ITEMS */}
      <div className="text-center mb-5 mt-7 sm:mb-7 py-6 rounded-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          TRENDING ITEMS
        </h2>
        <p className="mt-4 underline font-semibold text-black text-sm sm:text-base">
          Check out what's hot right now
        </p>
      </div>

      <div className="flex flex-wrap  bg-gray-100 p-10 justify-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
        {data4.map((item, index) => (
          <section
            key={index}
            className="w-[280px] sm:w-72 p-3 sm:p-5 bg-white shadow-md hover:shadow-xl rounded-xl transition duration-300"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 sm:h-48 object-contain rounded-md transform hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg"
              />
            </div>
            <div className="mt-3 sm:mt-4 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-bold text-black">
                  <del className="text-gray-400 text-xs sm:text-sm mr-1">
                    {item.prevPrice}
                  </del>
                  ${item.newPrice}
                </span>
                <button
                  onClick={() => handleAddToCart(item, "trending")}
                  className="bg-black text-white p-1.5 sm:p-2 rounded-full hover:bg-gray-800 transition group"
                >
                  <FaShoppingBag className="text-sm sm:text-base group-hover:scale-110 transition-transform duration-200" />
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
