import React from "react";
import { useAppContext } from "../context/AppContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const { cart, total, amount, removeFromCart, updateQuantity, clearCart } =
    useAppContext();

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart</h2>
            <p className="text-gray-600">Your cart is empty</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Cart Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <p className="text-gray-600">{amount} items</p>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="p-6 flex items-center">
                {/* Product Image */}
                <div className="flex-shrink-0 w-24 h-24">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-sm text-gray-500">
                    <p>Price: ${item.newPrice}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="mt-4 flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <FaMinus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="mx-4 text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <FaPlus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Price and Remove Button */}
                <div className="ml-6 flex flex-col items-end">
                  <p className="text-lg font-medium text-gray-900">
                    ${(item.newPrice * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-red-600 hover:text-red-800"
                  >
                    <FaTrash className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-900">Total</p>
                <p className="text-sm text-gray-500">Including all taxes</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={clearCart}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
