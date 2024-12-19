import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between md:items-center">
      <div className="text-xl sm:text-2xl text-white">
        <p className="font-bold">Subscribe to our newsletter</p>
        <p>latest news, articles, and resources </p>
      </div>

      <div className="flex gap-4">
        <input
          className="rounded-md w-full md:w-96 px-6 outline-none"
          type="text"
          placeholder="Enter your email"
        />

        <button className="px-8 sm:px-16 py-2 md:py-4 bg-secondary rounded-md text-xl font-bold text-white cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
