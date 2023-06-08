import React from "react";

const GenreButton = () => {
  return (
    <div>
      <div className="grid grid-cols-4 p-4">
        <button className="underline decoration-2 hover:text-blue-600 transition">
          Action
        </button>
        <button className="underline decoration-2 hover:text-blue-600 transition">
          Horror
        </button>
        <button className="underline decoration-2 hover:text-blue-600 transition">
          Comedy
        </button>
        <button className="underline decoration-2 hover:text-blue-600 transition">
          Drama
        </button>
      </div>
    </div>
  );
};

export default GenreButton;
