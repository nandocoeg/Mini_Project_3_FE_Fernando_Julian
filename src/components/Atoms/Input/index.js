import React from "react";

export const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
      className="py-2 px-4 pr-10 bg-gray-200 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};