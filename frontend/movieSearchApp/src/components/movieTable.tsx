import { useState } from "react";
import { IMovie, IMovies } from "../interfaces/IMovie";
import "../style/movieTable.css";

/**
 * @description The row elements of the movie table. Displays the name, release year and IMDB rating.
 *
 * @param {IMovie} {  Series_Title, Released_Year, IMDB_Rating }
 */
const MovieRowComp = ({ Series_Title, Released_Year, IMDB_Rating }: IMovie) => (
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

export /**
 * @description Table component for displaying movies. Creates a list of movieRowComps and displays them as a table.
 *
 * @param {IMovies} moviesProp
 */
const MovieTableComp = (moviesProp: IMovies): JSX.Element => {
  const [pagenum, setPagenum] = useState(0);

  const buttonRightHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //run switch page right function
    alert("going right");
  };
  const buttonLeftHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //run switch page left function
    alert("going left");
  };
  // might use later:
  // const inputPagenumHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const enteredNumber: number = event.target.valueAsNumber;
  //   if (!isNaN(enteredNumber)) {
  //     setPagenum(enteredNumber);
  //     alert("going to page " + enteredNumber);
  //   }
  //   //set pagunation number
  // };

  return (
    <div className="movieTableContainer">
      {/* Table filtering */}
      <div className="FilterBar">
        <label>Genre</label>
        <input type="text" />
        <label>Actor</label>
        <input type="text" />
      </div>
      {/* The table */}
      <div className="movieTable">
        <div className="movieTableDiscription">
          <p>Movie Title</p>
          <p>Movie Year</p>
          <p>IMDB Rating</p>
        </div>
        {moviesProp.movieList.map((movie: IMovie) => {
          return (
            <MovieRowComp
              Series_Title={movie.Series_Title}
              Released_Year={movie.Released_Year}
              IMDB_Rating={movie.IMDB_Rating}
            />
          );
        })}
      </div>
      {/* Page navigation */}
      <div className="pageNavigation">
        <button onClick={buttonLeftHandler}>&larr; prev page</button>
        {/* might use later: */}
        {/* <input
          className="pageField"
          type="number"
          onChange={inputPagenumHandler}
          value={pagenum}
        ></input> */}
        <button onClick={buttonRightHandler}>&rarr; next page</button>
      </div>
    </div>
  );
};
