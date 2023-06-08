import React from "react";
import YouTube from "react-youtube";

const MovieDetail = ({ movie, onClose }) => {
  const { title, overview, release_date, trailer } = movie;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="max-w-lg bg-white p-4">
      <button
        className="absolute top-2 right-2 text-gray-500"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{overview}</p>
      <p className="text-gray-600 mb-4">Release Date: {release_date}</p>
      <div className="mb-4">
        <YouTube videoId={trailer} />
      </div>
    </div>
  );
};

export default MovieDetail;
