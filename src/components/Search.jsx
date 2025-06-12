import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for shoes..."
        className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        <FaSearch className="h-4 w-4" />
      </button>
    </form>
  );
};

export default Search;
