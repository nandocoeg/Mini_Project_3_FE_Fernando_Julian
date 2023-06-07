import React from "react";

export const ButtonStart = () => {
  return (
    <button
      type="button"
      class="bg bg-gradient-to-tr from-blue-500 to-blue-900 h-10 w-80 rounded-md"
    >
      <span class="text-white font-semibold">Get Started</span>
    </button>
  );
};

export const DetailButton = () => {
  return (
    <div>
      <button className="bg bg-gradient-to-tr from-blue-500 to-blue-900 h-8 w-16 rounded-md">
        Detail
      </button>
    </div>
  );
};

export const SearchButton = () => {
  return (
    <div>
      <button className="bg bg-gradient-to-tr from-blue-500 to-blue-900 h-8 w-16 rounded-md">
        Search
      </button>
    </div>
  );
};
