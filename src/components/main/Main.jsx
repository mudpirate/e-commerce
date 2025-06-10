import React, { useContext, useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.avif";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import { UIContext } from "../UserContext.jsx";

const images = [image1, image2, image3, image4, image5];

function Main() {
  const { openModal } = useContext(UIContext);
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
    }, 1700); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white mt-0 mb-2">
      {/* Left Arrow */}
      <div className="absolute left-2 z-10">
        <button
          onClick={prevImage}
          className="text-black bg-white p-2 shadow-lg hover:bg-gray-400 transition duration-200"
        >
          <FaChevronLeft className="text-xl" />
        </button>
      </div>

      {/* Image Container */}
      <div className="w-full relative">
        <img
          src={images[index]}
          alt="carousel"
          className="object-fill w-[65em] mx-auto h-[30em] transition -mt-14 duration-500"
        />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 z-10">
        <button
          onClick={nextImage}
          className="text-black bg-transparent p-2 shadow-lg hover:bg-gray-400 transition duration-200"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Main;
