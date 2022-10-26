import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import { GET_ALL_MOVIES } from "../queries/getMovies";
import { MovieTableComp } from "./MovieTable";
import SearchBar from "./SearchBar";

interface Props {
  title: string;
  setTitle: (value: string) => void;
}


function GetAllMovies(props: Props) {
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 10;
  let loadedMoviesList: IMovie[] = [];

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
    data.movies.map((movie: IMovie) => {
      loadedMoviesList.push(movie);
    })
  }

  return (
    <div>
      
      <SearchBar title={props.title} setTitle={props.setTitle} />
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

export default GetAllMovies;