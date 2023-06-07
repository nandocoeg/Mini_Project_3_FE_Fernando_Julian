import React from "react";
import Card from "../../Atoms/Card";

export const SearchResults = ({ results }) => {
  //   console.log(results);
  return results.map((result) => {
    return (
      <>
        <Card
          movieTitle={result.title}
          movieSinopsys={result.overview}
          moviePoster={result.poster_path}
        />
      </>
    );
  });
  //
};
