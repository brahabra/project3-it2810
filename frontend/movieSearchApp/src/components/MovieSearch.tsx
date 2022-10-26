import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { IMovie } from "../interfaces/IMovie";
import { GET_ALL_MOVIES, GET_MOVIES_BY_GENRE_SORT_BY_RATING, GET_MOVIES_BY_TITLE, GET_MOVIES_BY_TITLE_FILTER_BY_GENRE, GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_SORT_BY_RATING } from "../queries/getMovies";
import SearchBar from "./SearchBar";
import "../style/MovieSearch.css";
import { MovieTableComp } from "./MovieTable";
import SearchByTitle from "./SearchByTitle";
import GetAllMovies from "./GetAllMovies";
import { off } from "process";
import SearchByGenre from "./SearchByGenre";
import { Button } from "@mui/material";
import SearchByTitleAndGenre from "./SearchByTitleAndGenre";
import SearchByTitleAndGenreSorted from "./SearchByTitleAndGenreSorted";


function MovieSearch() {
  const [title, setTitle] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [sorting, setSorting] = useState<boolean>(false);

  function Child() {
    if (title && !filter && !sorting) {
      return <SearchByTitle title={title} setTitle={setTitle} />
    } else if (!title && filter && !sorting) {
      return <SearchByGenre title={title} filter={filter} setTitle={setTitle} />
    } else if (title && filter && sorting) {
      return <SearchByTitleAndGenreSorted title={title} filter={filter} setTitle={setTitle} />
    } else if (title && filter && !sorting) {
      return <SearchByTitleAndGenre title={title} filter={filter} setTitle={setTitle} />
    } else {
      return <GetAllMovies title={title} setTitle={setTitle} />
    }
  }

  return (
    <div>
      {Child()}
    </div>
  );
}

export default MovieSearch;