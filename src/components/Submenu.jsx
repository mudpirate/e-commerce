import React from "react";
import { Link } from "react-router-dom";

const Submenu = ({ category, isOpen }) => {
  const categories = {
    men: [
      { name: "Sneakers", path: "/men/sneakers" },
      { name: "Sports Shoes", path: "/men/sports" },
      { name: "Formal Shoes", path: "/men/formal" },
      { name: "Casual Shoes", path: "/men/casual" },
      { name: "Boots", path: "/men/boots" },
      { name: "Sandals", path: "/men/sandals" },
    ],
    women: [
      { name: "Sneakers", path: "/women/sneakers" },
      { name: "Sports Shoes", path: "/women/sports" },
      { name: "Heels", path: "/women/heels" },
      { name: "Flats", path: "/women/flats" },
      { name: "Boots", path: "/women/boots" },
      { name: "Sandals", path: "/women/sandals" },
    ],
    kids: [
      { name: "Sneakers", path: "/kids/sneakers" },
      { name: "Sports Shoes", path: "/kids/sports" },
      { name: "School Shoes", path: "/kids/school" },
      { name: "Casual Shoes", path: "/kids/casual" },
      { name: "Sandals", path: "/kids/sandals" },
    ],
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg py-3 z-[100] mt-2 border border-gray-100">
      <div className="px-2 py-1 mb-1 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {category} Categories
        </h3>
      </div>
      {categories[category]?.map((item, index) => (
        <Link
          key={index}
          to="items"
          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 text-sm font-medium"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Submenu;
