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
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  // When new title is searched for, set the offset to zero. 
  useEffect(() => {
    setOffset(0);
  }, [title])

  function DisplayMovies() {
    let loadedMoviesList: IMovie[] = [];

    const { loading, error, data } = useQuery(GET_MOVIES(title), {
      variables: { title, offset, limit },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Check if the last page is showing
    if(data.movies.length < 10){
      setIsLastPage(true);
    }

    data.movies.map((movie: IMovie) => {
      loadedMoviesList.push(movie);
    });
    
    return (
      <MovieTableComp
        movieList={loadedMoviesList}
        offset={offset}
        setOffset={setOffset}
        limit={limit}
        setLimit={setLimit}
        isLastPage={isLastPage}
        setIsLastPage={setIsLastPage}
      />
    );
  }

  return (
    <>
      <div className="test">
        <SearchBar title={title} setTitle={setTitle} />
        <DisplayMovies />
      </div>
    </>
  );
}

export default MovieSearch;
