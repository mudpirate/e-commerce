import React, { useContext } from "react";
import { UIContext } from "./UserContext.jsx";

function Modal() {
  const { isModalOpen, closeModal } = useContext(UIContext);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md relative animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Special Offer</h2>
        <p className="text-gray-600 mb-6">
          Get <span className="font-semibold text-blue-600">20% off</span> your
          first order! Use code <strong>WELCOME20</strong> at checkout.
        </p>
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <button
          onClick={closeModal}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Modal;
