import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function CartPage() {
  // Sample cart data
  const cartItems = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      title: "Nike Air Vapormax Plus",
      price: "$200.00",
      quantity: 1,
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      title: "Nike Air Monarch IV",
      price: "$180.00",
      quantity: 2,
    },
  ];

  // Function to remove item
  const handleRemove = (id) => {
    console.log("Item removed with id:", id);
  };

  // Calculate total price
  const totalPrice = cartItems
    .reduce(
      (total, item) =>
        total +
        parseFloat(item.price.replace("$", "").replace(",", "")) *
          item.quantity,
      0
    )
    .toFixed(2);

  return (
    <div className="w-full  p-6  rounded-lg shadow-lg h-full">
      <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart</h2>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white p-6 rounded-lg shadow-md"
          >
            <img
              src={item.img}
              alt={item.title}
              className=" w-45 h-45 object-fill rounded mr-10"
            />
            <div className="flex-1 ml-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.price}</p>
              <div className="flex items-center mt-3">
                <button className="bg-gray-200 p-2 rounded-md text-lg">
                  -
                </button>
                <span className="mx-4 text-lg">{item.quantity}</span>
                <button className="bg-gray-200 p-2 rounded-md text-lg">
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500 text-xl hover:text-red-700"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-semibold">
          <span>Total:</span>
          <span className="ml-2 text-gray-700">${totalPrice}</span>
        </div>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
