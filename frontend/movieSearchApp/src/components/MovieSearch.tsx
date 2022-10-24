import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import { GET_MOVIES } from "../queries/getMovies";
import SearchBar from "./SearchBar";
import "../style/MovieSearch.css";
import { MovieTableComp } from "./MovieTable";
import { CircularProgress } from "@mui/material";

function MovieSearch() {
const [title, setTitle] = useState<string>("matrix");  
const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 10;
  let loadedMoviesList: IMovie[] = [];

  // If a new title is searched for, set the the current page to zero.
  useEffect(() => {
    setCurrentPage(0);
  }, [title]);

  const { loading, error, data } = useQuery(GET_MOVIES, {
      variables: { searchString: title, offset: currentPage * PAGE_SIZE, limit: PAGE_SIZE},
    });

  if (loading)
    return (
      <div>
        <p>Loading data...</p>
        <CircularProgress />
      </div>
    );

  if (error) return <p>Error</p>;

  // Add the offset to the list which is showing the movies
  data.findMovieByTitle.map((movie: IMovie) => {
    loadedMoviesList.push(movie);
  });

  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} />
      <MovieTableComp
        movieList={loadedMoviesList}
        offset={offset}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default MovieSearch;