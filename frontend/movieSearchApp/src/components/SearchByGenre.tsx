import { GET_MOVIES_BY_GENRE_SORT_BY_RATING, GET_MOVIES_BY_TITLE } from "../queries/getMovies"
import { useQuery } from "@apollo/client";
import { IExtendedMovie } from "../interfaces/IMovie";
import { useState } from "react";
import { DisplayMovies } from "./DisplayMovies";
import { Pagination } from "./Pagination";

interface Props {
  title: string,
  filter: string;
  setTitle: (value: string) => void;
}

function SearchByGenre(props: Props) {
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 10;
  let loadedMoviesList: IExtendedMovie[] = [];

  const { loading, error, data } = useQuery(GET_MOVIES_BY_GENRE_SORT_BY_RATING, {
    variables: {
      filterString: props.filter,
      options: {
        offset: currentPage * PAGE_SIZE,
        limit: PAGE_SIZE,
      }
    }
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    data.findMovieByGenreSortByRating.forEach((movie: IExtendedMovie) => {
      loadedMoviesList.push(movie);
    })
  }

  return (
    <div>
      <DisplayMovies
        movieList={loadedMoviesList}
      />
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
