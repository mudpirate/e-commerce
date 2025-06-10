import React from "react";
import { FaStar, FaShoppingBag } from "react-icons/fa";

function Products({ Product }) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {Product.map((item, index) => (
          <section
            key={index}
            className="p-4 bg-white shadow-md rounded-xl hover:shadow-xl transition-shadow duration-300"
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
                    ${item.prevPrice}
                  </del>
                  <span className="text-xl font-bold text-green-600">
                    ${item.newPrice}
                  </span>
                </div>
                <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                  <FaShoppingBag />
                </button>
              </section>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Products;
