import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import data from "./ProductItems/data.jsx";

const ProductItems = () => {
  const location = useLocation();
  const { addToCart } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sample product data - replace with your actual data source
  const products = data;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search");

    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No products found
            </h2>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative  pb-[80%] ]">
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 ml-9 w-[70%] h-[70%] -mb-20 object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      ${product.newPrice}
                    </span>
                    {product.prevPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.prevPrice}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
