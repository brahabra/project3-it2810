import { TextField, Button } from "@mui/material";
import { off } from "process";
import { useState } from "react";
import { IExtendedMovie, IMovie, IMovies } from "../interfaces/IMovie";
import "../style/MovieTable.css";
import { MovieComponent } from "./MovieComponent";

/**
 * @description Table component for displaying movies. Creates a list of movies and displays them.
 *
 * @param {IMovies} moviesProp
 */

interface Props {
  movieList: IExtendedMovie[];
  offset: number;
  currentPage: number;
  setOffset: (value: number) => void;
  setCurrentPage: (value: number) => void;
}

export const MovieTableComp = (props: Props): JSX.Element => {
  return (
    <div className="movieTableContainer">
      {props.movieList.length > 0 ? (
        props.movieList.map((movie: IExtendedMovie) => {
          return <MovieComponent movie={movie} />;
        })
      ) : (
        <p>No movies matched your search!</p>
      )}

      <div className="pageNavigation">
        <Button
          className="prevButton"
          onClick={() => {
            props.setCurrentPage(props.currentPage - 1);
          }}
          variant="contained"
          disabled={props.currentPage > 0 ? false : true}
        >
          &larr; Prev page
        </Button>

        <TextField
          className="pageTextField"
          disabled={true}
          type="text"
          value={"Page " + (props.currentPage + 1)}
        />

        <Button
          className="nextButton"
          onClick={() => {
            props.setCurrentPage(props.currentPage + 1);
          }}
          variant="contained"
          //bug: if the last page contains 10 movies, the button is still possible to click on. The user can then open a empty page.
          // not sure how we can fix this. Could be solved if we knew the size of the data list
          disabled={props.movieList.length < 10 ? true : false}
        >
          Next page &rarr;
        </Button>
      </div>
    </div>
  );
};
