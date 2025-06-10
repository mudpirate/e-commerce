import React from "react";
import ReviewsData from "./ReviewsData";

function Review() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 underline decoration-blue-400">
        Our Reviews
      </h1>
      <ReviewsData />
    </section>
  );
}

export default Review;
