import { TextField, Button } from "@mui/material";
import { off } from "process";
import { useState } from "react";
import { IMovie, IMovies } from "../interfaces/IMovie";
import "../style/MovieTable.css";

/**
 * @description The row elements of the movie table. Displays the name, release year and IMDB rating.
 *
 * @param {IMovie} {  Series_Title, Released_Year, IMDB_Rating }
 */
export const MovieRowComp = ({
  Series_Title,
  Released_Year,
  IMDB_Rating,
}: IMovie) => (
  <div className="movieRow">
    <div className="movieRowSection">
      <p>{Series_Title}</p>
    </div>
    <div className="movieRowSection">
      <p>{Released_Year}</p>
    </div>
    <div className="movieRowSection">
      <p>{IMDB_Rating}</p>
    </div>
  </div>
);

/**
 * @description Table component for displaying movies. Creates a list of movieRowComps and displays them as a table.
 *
 * @param {IMovies} moviesProp
 */

interface Props {
  movieList: IMovie[];
  offset: number;
  currentPage: number;
  setOffset: (value: number) => void;
  setCurrentPage: (value: number) => void;
}

export const MovieTableComp = (props: Props): JSX.Element => {
  //const [pagenum, setPagenum] = useState(0);

  //might use later:
  /*const inputPagenumHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredNumber: number = event.target.valueAsNumber;
    if (!isNaN(enteredNumber)) {
      setPagenum(enteredNumber);
      alert("going to page " + enteredNumber);
    }
    //set pagunation number
  };*/

  return (
    <div className="movieTableContainer">
      {/* Table filtering */}
      {/* <div className="FilterBar">
        <label>Genre</label>
        <input type="text" />
        <label>Actor</label>
        <input type="text" />
      </div> */}
      {/* The table */}
      <div className="movieTable">
        <div className="movieTableDiscription">
          <p>Title</p>
          <p>Release year</p>
          <p>IMDB Rating</p>
        </div>

        {props.movieList.length > 0 ? (
          props.movieList.map((movie: IMovie) => {
            return (
              <MovieRowComp
                Series_Title={movie.Series_Title}
                Released_Year={movie.Released_Year}
                IMDB_Rating={movie.IMDB_Rating}
              />
            );
          })
        ) : (
          <p>No movies matched your search!</p>
        )}
      </div>
      {/* Page navigation */}
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
        {/* might use later: */}
        {/* <input
          className="pageField"
          type="number"
          onChange={inputPagenumHandler}
          value={pagenum}
        ></input> */}

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
