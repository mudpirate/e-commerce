import React from "react";

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className="max-w-5xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Left: Image & Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.newPrice}</p>
                </div>
              </div>

              {/* Right: Remove Button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
