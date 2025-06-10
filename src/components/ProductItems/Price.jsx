import React from "react";

function Price({ filterByPrice }) {
  const prices = [
    { label: "All", value: [0, Infinity] },
    { label: "Under $50", value: [0, 50] },
    { label: "$50 - $100", value: [50, 100] },
    { label: "$100 - $150", value: [100, 150] },
    { label: "Above $150", value: [150, Infinity] },
  ];

  const handleChange = (range) => {
    filterByPrice(range);
  };

  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">Price</h3>
      <ul className="space-y-1">
        {prices.map((price, i) => (
          <li key={i}>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                onChange={() => handleChange(price.value)}
              />
              <span>{price.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Price;
