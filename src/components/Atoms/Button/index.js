import React from "react";

export const ButtonStart = ({ onClick, text = "Get Started", className = "" }) => {
  return (
    <button
      type="button"
      className={`bg bg-gradient-to-tr from-blue-500 to-blue-900 h-10 w-80 rounded-md ${className}`}
      onClick={onClick}
    >
      <span className="text-white font-semibold">{text}</span>
    </button>
  );
};

export const DetailButton = ({ onClick, text = "Detail", className = "" }) => {
  return (
    <div>
      <button
        className={`bg bg-gradient-to-tr from-blue-500 to-blue-900 h-8 w-16 rounded-md ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export const SearchButton = ({ onClick, text = "Search", className = "" }) => {
  return (
    <div>
      <button
        className={`bg bg-gradient-to-tr from-blue-500 to-blue-900 h-8 w-16 rounded-md ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
