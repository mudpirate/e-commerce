import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Store</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-md transition-colors duration-200"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            <Link
              to="/men"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              onClick={onClose}
            >
              Men
            </Link>
            <Link
              to="/women"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              onClick={onClose}
            >
              Women
            </Link>
            <Link
              to="/kids"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              onClick={onClose}
            >
              Kids
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
