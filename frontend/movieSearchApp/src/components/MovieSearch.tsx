import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import { GET_MOVIES } from "../queries/getMovies";
import SearchBar from "./SearchBar";
import "../style/MovieSearch.css";
import { MovieTableComp } from "./MovieTable";

function MovieSearch() {
  const [title, setTitle] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  let loadedMoviesList: IMovie[] = [];

  // If a new title is searched for, set the offset to zero.
  useEffect(() => {
    setOffset(0);
  }, [title]);

  const { loading, error, data } = useQuery(GET_MOVIES(title), {
    variables: { title, offset, limit },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Add the offset to the list which is showing the movies
  data.movies.map((movie: IMovie) => {
    loadedMoviesList.push(movie);
  });

  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} />
      <MovieTableComp
        movieList={loadedMoviesList}
        offset={offset}
        setOffset={setOffset}
        limit={limit}
        setLimit={setLimit}
      />
    </div>
  );
}

export default MovieSearch;
