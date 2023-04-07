import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { globalData } from "../../App";
import MovieCard from "../moviecard/MovieCard";
import './movielist.css'
const MovieList = ({ allMovies }) => {
  const context = useContext(globalData);
  const { category } = useParams();
  return (
    <>
      <div className="movielist">
        <div className="movie_list">
          <MovieCard
            allMovies={
              category === "popular"
                ? context.popularMoviesFromApi
                : category === "top_rated"
                ? context.topRatedMoviesFromApi
                : category === "upcoming"
                ? context.upcomingMoviesFromApi
                : context.state.length !== 0 ? [...context.state] : [...context.popularMoviesFromApi, ...context.topRatedMoviesFromApi, ...context.upcomingMoviesFromApi]
            }
          />
        </div>
      </div>
    </>
  );
};

export default MovieList;
