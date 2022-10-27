import { GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_SORT_BY_RATING } from "../queries/getMovies"
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { DisplayMovies } from "./DisplayMovies";
import { IExtendedMovie } from "../interfaces/IMovie";

interface Props {
  title: string,
  filter: string;
  setTitle: (value: string) => void;
}

function SearchByTitleAndGenreSorted(props: Props) {
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 10;
  let loadedMoviesList: IExtendedMovie[] = [];

  const { loading, error, data } = useQuery(GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_SORT_BY_RATING, {
    variables: {
      searchString: props.title,
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
    data.findMovieByTitleWithGenreFilter.forEach((movie: IExtendedMovie) => {
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

export default SearchByTitleAndGenreSorted;
