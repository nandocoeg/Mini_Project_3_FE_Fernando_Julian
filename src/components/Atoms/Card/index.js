import React, { useState } from "react";
import { DetailButton } from "../Button";
import { imageUrl } from "../../../services/API/api";
import YouTube from "react-youtube";
import { BsStar, BsX } from "react-icons/bs";

const Card = ({
  moviePoster,
  movieTitle,
  movieSinopsys,
  movieTrailer,
  moviePopularity,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  const youtubeOpts = {
    width: "100%",
    height: "360",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex-wrap max-w-xs">
      <div className="rounded overflow-hidden shadow-lg bg-slate-700 relative">
        <img
          src={`${imageUrl}${moviePoster}`}
          alt="Placeholder"
          className="w-full h-auto"
        />
        <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
          <div className="px-6 py-8">
            <div
              className="font-bold text-xl mb-2 cursor-pointer"
              onClick={handleToggleDetails}
            >
              {movieTitle}
            </div>
            <p className="text-gray-300 text-base truncate">{movieSinopsys}</p>
            <a
              href="#"
              className="absolute bottom-0 pb-8"
              onClick={handleToggleDetails}
            >
              <DetailButton />
            </a>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-95">
          <div className="max-w-3xl bg-white p-8 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <div className="">
                <h2 className="text-2xl font-bold text-slate-900">
                  {movieTitle}
                </h2>
                <div className="flex gap-2 items-center mt-2">
                  <h3 className="text-lg font-bold text-gray-700">
                    <BsStar />
                  </h3>
                  <p className="text-gray-700">{moviePopularity}</p>
                </div>
              </div>
              <button
                className="text-red-600 text-3xl"
                onClick={handleToggleDetails}
              >
                <BsX />
              </button>
            </div>
            <div>
              <p className="text-gray-700">{movieSinopsys}</p>
              <div className="mt-1">
                <h3 className="text-lg font-bold">Movie Trailer</h3>
                <YouTube videoId={movieTrailer} opts={youtubeOpts} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
