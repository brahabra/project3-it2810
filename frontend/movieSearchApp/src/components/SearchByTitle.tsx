import {
  GET_MOVIES_BY_TITLE,
  GET_MOVIES_BY_TITLE_ASC,
} from "../queries/getMovies";
import { useQuery, useReactiveVar } from "@apollo/client";
import { IExtendedMovie } from "../interfaces/IMovie";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { DisplayMovies } from "./DisplayMovies";
import { PAGE_OPTIONS } from "../enum";
import { titleSearchedFor } from "./SearchBar";

interface Props {
  sortingDirection: String;
}

// Load every movie in the database with title close to search string
function SearchByTitle(props: Props) {
  const title = useReactiveVar(titleSearchedFor);
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  let loadedMoviesList: IExtendedMovie[] = [];

  function sortingDirection() {
    if (props.sortingDirection === "ASC") {
      return GET_MOVIES_BY_TITLE_ASC;
    } else {
      return GET_MOVIES_BY_TITLE;
    }
  }

  const { loading, error, data } = useQuery(sortingDirection(), {
    variables: {
      searchString: title,
      options: {
        offset: currentPage * PAGE_OPTIONS.PAGE_SIZE,
        limit: PAGE_OPTIONS.PAGE_SIZE,
      },
    },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Add the data loaded in to a list, then send the list as prop to DisplayMovies
  if (data) {
    let response = [];
    if (props.sortingDirection === "ASC") {
      response = data.findMovieByTitleASC;
    } else {
      response = data.findMovieByTitleDESC;
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

export default SearchByTitle;
