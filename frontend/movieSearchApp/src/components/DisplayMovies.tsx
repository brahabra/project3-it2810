import { IExtendedMovie } from "../interfaces/IMovie";
import "../style/DisplayMovies.css";
import { MovieComponent } from "./MovieComponent";

interface Props {
  movieList: IExtendedMovie[];
}
// DisplayMovies loads the movieList, and for each entry in the movieList, return it as a MovieComponent
export const DisplayMovies = (props: Props): JSX.Element => {
  return (
    <div className="movieTableContainer">
      {props.movieList.length > 0 ? (
        props.movieList.map((movie: IExtendedMovie, id) => {
          return <MovieComponent key={id} movie={movie} />;
        })
      ) : (
        <p className="feedbackText">No movies matched your search!</p>
      )}
    </div>
  );
};
