import React, { useState } from "react";
import { DetailButton } from "../Button";
import { imageUrl } from "../../../services/API/api";
import YouTube from "react-youtube";

const Card = ({ moviePoster, movieTitle, movieSinopsys, movieTrailer }) => {
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
    <div className="flex-wrap max-w-sm">
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
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="max-w-3xl bg-white p-8 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{movieTitle}</h2>
              <button className="text-gray-700" onClick={handleToggleDetails}>
                Close
              </button>
            </div>
            <div className="flex">
              <img
                src={`${imageUrl}${moviePoster}`}
                alt="Placeholder"
                className="w-48 h-auto mr-4"
              />
              <div>
                <p className="text-gray-700">{movieSinopsys}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-bold">Movie Trailer</h3>
                  <YouTube videoId={movieTrailer} opts={youtubeOpts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
