import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  return <div>Movie Listing</div>;
};

export default MovieListing;
