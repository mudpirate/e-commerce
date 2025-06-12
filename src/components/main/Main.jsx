import React, { useContext, useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.avif";
import image4 from "../../assets/image4.jpg";

import { UIContext } from "../UserContext.jsx";

const images = [image2, image3, image4];

function Main() {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 1700);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] mt-0 mb-2">
      {/* Left Arrow */}
      <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevImage}
          className="text-black bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
        >
          <FaChevronLeft className="text-xl sm:text-2xl md:text-3xl" />
        </button>
      </div>

      {/* Image Container */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full relative overflow-hidden bg-white">
          <img
            src={images[index]}
            alt="carousel"
            className="w-full h-full object-contain transition duration-500 ease-in-out"
            loading="lazy"
          />
          {/* Gradient Overlay */}
        </div>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-4 sm:right-6 md:right-8 lg:right-10 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextImage}
          className="text-black bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
        >
          <FaChevronRight className="text-xl sm:text-2xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default Main;
