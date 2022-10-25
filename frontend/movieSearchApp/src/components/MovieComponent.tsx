import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { IExtendedMovie, IMovie } from "../interfaces/IMovie";
import "../style/MovieComponent.css";

interface Props {
  movie: IExtendedMovie;
}

export const MovieComponent = (props: Props) => {
  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = React.useState(0);

  const handleClickOutside = () => {
    
  };

  const ref = useOutsideClick(handleClickOutside);

  function showExtendedInfo() {
    setShowMore(!showMore);
  }


 
  

  return (
    <Box className="movieBox">
      <div /* ref={ref} */ onClick={showExtendedInfo}>
        {showMore != true ? (
          <div className="shortMovie">
            <h2>
              {props.movie.Series_Title} ({props.movie.Released_Year}){" "}
              {props.movie.IMDB_Rating}&#9733;
            </h2>
            {/* <div className="moviePicture">
              <img src={props.movie.Poster_Link} alt="Pictue of movie" />
            </div> */}
            <p>
              <strong>Description:</strong> {props.movie.Overview}
            </p>
          </div>
        ) : (
          <div className="extendedMovie">
            <div className="moviePicture">
              <img src={props.movie.Poster_Link} alt="Picture of movie" />
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
                <strong>Genre:</strong> {props.movie.Genre}
              </p>
              <p>
                <strong>Directed by:</strong> {props.movie.Director}
              </p>
              <p>
                <strong>Runtime:</strong> {props.movie.Runtime}
              </p>
              <p>
                <strong>Featuring: </strong> {props.movie.Star1},{" "}
                {props.movie.Star2}, {props.movie.Star3} and {props.movie.Star4}
              </p>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
};
