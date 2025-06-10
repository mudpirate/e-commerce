import React, { useContext } from "react";
import "./Nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { UIContext } from "../components/UserContext.jsx";
import { Link } from "react-router-dom";

function Nav() {
  const { openSidebar } = useContext(UIContext);

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Sidebar Button + Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={openSidebar}
            className="text-black text-xl sm:hidden hover:scale-110 transition"
          >
            <FaBars />
          </button>
          <Link to="/" className="hover:text-black transition">
            <h1 className="text-xl font-bold">Nom Store</h1>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden sm:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-black transition">
              Men
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-black transition">
              Women
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition">
              Kids
            </a>
          </li>
          <li>
            <Link to="/ProductsItems" className="hover:text-black transition">
              Product
            </Link>
          </li>
        </ul>

        {/* Search bar */}
        <div className="hidden md:flex items-center mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l px-3 py-1 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button className="bg-black text-white px-3 py-1 rounded-r hover:bg-gray-800 transition">
            Search
          </button>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/Cartpage" className="hover:text-black transition">
            <FaShoppingCart className="text-black text-lg hover:scale-110 transition cursor-pointer" />
          </Link>

          <AiOutlineUser className="text-black text-lg hover:scale-110 transition cursor-pointer" />
          <FiHeart className="text-black text-lg hover:scale-110 transition cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
