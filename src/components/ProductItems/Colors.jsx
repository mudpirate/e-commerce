import React from "react";
import { FaCheck } from "react-icons/fa";

// Tailwind-compatible background classes
const colorMap = {
  white: "bg-white",
  black: "bg-black",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-400",
};

const colors = [...Object.keys(colorMap)];

const Colors = ({ filterByColor }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">Colors</h3>
      <div className="flex flex-wrap gap-2 items-center">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => filterByColor(color)}
            className={`w-8 h-8 flex items-center justify-center rounded-full border ${
              color === "All"
                ? "bg-gray-200 text-sm text-black px-3 py-1 rounded-md w-auto h-auto"
                : colorMap[color]
            }`}
            title={color}
          >
            {color === "All" ? "All" : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Colors;
