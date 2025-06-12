import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import Submenu from "../components/Submenu.jsx";
import { useAppContext } from "../context/AppContext";
import Search from "../components/Search";

const Nav = () => {
  const { cart } = useAppContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMouseEnter = (category) => {
    setActiveSubmenu(category);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">STORE</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/items"
              className="text-black font-bold hover:text-gray-600"
            >
              Products
            </Link>
            {["men", "women", "kids"].map((cat) => (
              <div
                key={cat}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(cat)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={`/${cat}`}
                  className="text-black hover:text-gray-600 py-2 capitalize"
                >
                  {cat}
                </Link>
                <Submenu category={cat} isOpen={activeSubmenu === cat} />
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
            <Search />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link
              to="/cart"
              className="relative group text-black hover:text-gray-600"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 22C9.552 22 10 21.552 10 21s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM20 22c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" />
                <path d="M1 1h4l2.68 13.39a1.6 1.6 0 0 0 1.6 1.21h9.72a1.6 1.6 0 0 0 1.6-1.21L23 6H6" />
              </svg>
              <div className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                {cart.length}
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {cart.length} {cart.length === 1 ? "item" : "items"} in cart
              </div>
            </Link>
            <Link to="/account" className="text-black hover:text-gray-400">
              <FaUser className="text-xl" />
            </Link>
            <button
              onClick={toggleSidebar}
              className="md:hidden text-black hover:text-gray-600 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}

      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 md:hidden px-4 py-6 transition-transform duration-300">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-2xl text-black hover:text-gray-600"
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>

          {/* Links */}
          <div className="mt-0 space-y-4">
            <Link to="/" className="block text-black hover:text-gray-600">
              Home
            </Link>
            <Link to="/men" className="block text-black hover:text-gray-600">
              Men
            </Link>
            <Link to="/women" className="block text-black hover:text-gray-600">
              Women
            </Link>
            <Link to="/kids" className="block text-black hover:text-gray-600">
              Kids
            </Link>
            <div className="pt-4">
              <Search />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
