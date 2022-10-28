import {
  GET_MOVIES_BY_TITLE_FILTER_BY_GENRE,
  GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_ASC,
} from "../queries/getMovies";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { DisplayMovies } from "./DisplayMovies";
import { IExtendedMovie } from "../interfaces/IMovie";
import { PAGE_OPTIONS } from "../enum";

interface Props {
  title: string;
  genre: string;
  sortingDirection: string;
  setTitle: (value: string) => void;
}

function SearchByTitleAndGenre(props: Props) {
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = PAGE_OPTIONS.PAGE_SIZE;
  let loadedMoviesList: IExtendedMovie[] = [];

  function sortingDirection() {
    if (props.sortingDirection === "ASC") {
      return GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_ASC;
    } else {
      return GET_MOVIES_BY_TITLE_FILTER_BY_GENRE;
    }
  }

  const { loading, error, data } = useQuery(sortingDirection(), {
    variables: {
      searchString: props.title,
      filterString: props.genre,
      options: {
        offset: currentPage * PAGE_SIZE,
        limit: PAGE_SIZE,
      },
    },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    let response = [];
    if (props.sortingDirection === "ASC") {
      response = data.findMovieByTitleWithGenreFilterASC;
    } else {
      response = data.findMovieByTitleWithGenreFilterDESC;
    }
    response.forEach((movie: IExtendedMovie) => {
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

export default SearchByTitleAndGenre;
