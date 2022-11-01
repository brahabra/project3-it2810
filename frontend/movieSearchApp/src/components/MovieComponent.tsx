import Box from "@mui/material/Box";
import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { IExtendedMovie } from "../interfaces/IMovie";
import "../style/MovieComponent.css";

interface Props {
  movie: IExtendedMovie;
}

export const MovieComponent = (props: Props) => {
  const [showMore, setShowMore] = useState(false);

  const handleClickOutside = () => {
    setShowMore(false);
  };
  // Custom hook use to register click outside of the component 
  const ref = useOutsideClick(handleClickOutside);

  const handleHeaderClick = (event: any) => {
    event.stopPropagation();
  };

  function showExtendedInfo() {
    setShowMore(!showMore);
  }

  // When clicking the movie component, it should display more information. This is handled with the boolean "showMore"
  return (
    <Box ref={ref} className="movieBox">
      <div onClick={handleHeaderClick}>
        <div onClick={showExtendedInfo}>
          {!showMore ? (
            <div className="shortMovie">
              <h2>
                {props.movie.Series_Title} ({props.movie.Released_Year}){" "}
                {props.movie.IMDB_Rating}&#9733;
              </h2>
              <p>
                <strong>Description:</strong> {props.movie.Overview}
              </p>
            </div>
          ) : (
            <div className="extendedMovie">
              <div className="moviePicture">
                <img src={props.movie.Poster_Link} alt="Poster of movie" />
              </div>
              <div className="movieText">
                <h2>
                  {props.movie.Series_Title} ({props.movie.Released_Year}){" "}
                  {props.movie.IMDB_Rating}&#9733;
                </h2>
                <p>
                  <strong>Description:</strong> {props.movie.Overview}
                </p>
                <p>
                  <strong>Featuring: </strong> {props.movie.Star1},{" "}
                  {props.movie.Star2}, {props.movie.Star3} and{" "}
                  {props.movie.Star4}
                </p>
                <p>
                  <strong>Genre:</strong> {props.movie.Genre}
                </p>
                <p>
                  <strong>Runtime:</strong> {props.movie.Runtime}
                </p>
                <p>
                  <strong>Directed by:</strong> {props.movie.Director}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};
