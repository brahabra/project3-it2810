import { useQuery } from "@apollo/client";
import { IExtendedMovie } from "../interfaces/IMovie";
import { useState } from "react";
import { DisplayMovies } from "./DisplayMovies";
import { Pagination } from "./Pagination";
import { PAGE_OPTIONS } from "../enum";
import { GET_ALL_MOVIES_FILTER_BY_GENRE } from "../queries/getMovies";

interface Props {
  genre: string;
  sortingDirection: String;
  setTitle: (value: string) => void;
}

function SearchByGenre(props: Props) {
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = PAGE_OPTIONS.PAGE_SIZE;
  let loadedMoviesList: IExtendedMovie[] = [];

  const { loading, error, data } = useQuery(GET_ALL_MOVIES_FILTER_BY_GENRE, {
    variables: {
      where: {
        Genre_CONTAINS: props.genre,
      },
      options: {
        offset: currentPage * PAGE_SIZE,
        limit: PAGE_SIZE,
        sort: {
          IMDB_Rating: props.sortingDirection,
        },
      },
    },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    data.movies.forEach((movie: IExtendedMovie) => {
      loadedMoviesList.push(movie);
    });
  }

  return (
    <div>
      <DisplayMovies movieList={loadedMoviesList} />
      <Pagination
        movieList={loadedMoviesList}
        offset={offset}
        currentPage={currentPage}
        setOffset={setOffset}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default SearchByGenre;
