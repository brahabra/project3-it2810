import { off } from "process";
import { useState } from "react";
import { IMovie, IMovies } from "../interfaces/IMovie";
import "../style/movieTable.css";

/**
 * @description The row elements of the movie table. Displays the name, release year and IMDB rating.
 *
 * @param {IMovie} {  Series_Title, Released_Year, IMDB_Rating }
 */
export const MovieRowComp = ({ Series_Title, Released_Year, IMDB_Rating }: IMovie) => (
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
    limit: number;
    isLastPage: boolean;
    setOffset: (value: number) => void;
    setLimit: (value: number) => void;
    setIsLastPage: (value: boolean) => void;
  }

  export const MovieTableComp = (props: Props): JSX.Element => {
  //const [pagenum, setPagenum] = useState(0);

  // If right button is clicked, go to the next page
  const buttonRightHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(props.isLastPage){
      alert("Already on last page!");
    }
    else {
      props.setOffset(props.offset + 10);
    }
  };

  // If left button is clicked, go to the prev page
  const buttonLeftHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(props.offset - 10 >= 0){
      props.setOffset(props.offset - 10);
    }
    else {
      alert("Already on the first page!")
    }
  };

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
          <p>Movie Title</p>
          <p>Movie Year</p>
          <p>IMDB Rating</p>
        </div>
        {props.movieList.map((movie: IMovie) => {
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
        <button onClick={buttonLeftHandler}>&larr; Prev page</button>
        {/* might use later: */}
        {/* <input
          className="pageField"
          type="number"
          onChange={inputPagenumHandler}
          value={pagenum}
        ></input> */}
        <button onClick={buttonRightHandler}>Next page &rarr;</button>
      </div>
    </div>
  );
};
