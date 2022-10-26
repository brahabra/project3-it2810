import { TextField, Button } from "@mui/material";
import { off } from "process";
import { useState } from "react";
import { IExtendedMovie, IMovie, IMovies } from "../interfaces/IMovie";
import "../style/DisplayMovies.css";
import { MovieComponent } from "./MovieComponent";

/**
 * @description Table component for displaying movies. Creates a list of movies and displays them.
 *
 * @param {IMovies} moviesProp
 */

interface Props {
  movieList: IExtendedMovie[];
}

export const DisplayMovies = (props: Props): JSX.Element => {
  return (
    <div className="movieTableContainer">
      {props.movieList.length > 0 ? (
        props.movieList.map((movie: IExtendedMovie) => {
          return <MovieComponent key={movie.Poster_Link} movie={movie} />;
        })
      ) : (
        <p>No movies matched your search!</p>
      )}
    </div>
  );
};
