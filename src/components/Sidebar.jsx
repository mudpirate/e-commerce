import React, { useContext } from "react";
import { UIContext } from "./UserContext.jsx";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(UIContext);

  if (!isSidebarOpen) return null;

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        <button
          onClick={closeSidebar}
          className="text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>
      <nav>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
