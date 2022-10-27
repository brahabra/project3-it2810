import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IExtendedMovie } from "../interfaces/IMovie";
import { GET_ALL_MOVIES } from "../queries/getMovies";
import { DisplayMovies } from "./DisplayMovies";
import { Pagination } from "./Pagination";
import { PAGE_OPTIONS } from "../enum";

interface Props {
  title: string;
  setTitle: (value: string) => void;
}


function GetAllMovies(props: Props) {
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = PAGE_OPTIONS.PAGE_SIZE;
  let loadedMoviesList: IExtendedMovie[] = [];

  const { loading, error, data } = useQuery(GET_ALL_MOVIES, {
    variables: {
      options: {
        offset: currentPage * PAGE_SIZE,
        limit: PAGE_SIZE,
      }
    }
  });

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Could not load movies ... </p>;


  if (data) {
    data.movies.map((movie: IExtendedMovie) => {
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

export default GetAllMovies;