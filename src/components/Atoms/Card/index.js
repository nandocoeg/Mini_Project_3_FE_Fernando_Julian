import React from "react";
import { DetailButton } from "../Button";
import { imageUrl } from "../../../services/API/api";

const Card = ({ moviePoster, movieTitle, movieSinopsys }) => {
  return (
    <div className="grid grid-cols-4 justify-center gap-8">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 w-64 h-96 relative">
        <img
          src={`${imageUrl}${moviePoster}`}
          alt="Placeholder"
          className="w-64 h-96"
        />
        <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
          <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">{movieTitle}</div>
            <p className="text-gray-300 text-base truncate">{movieSinopsys}</p>
            <a href="#" className="absolute bottom-0 pb-8">
              <DetailButton />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
