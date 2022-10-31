import { useQuery } from "@apollo/client";
import { Box, TableSortLabel } from "@mui/material";
import console from "console";
import { useEffect, useState } from "react";
import { E } from "../enum";
import { IExtendedMovie, IMovie } from "../interfaces/IMovie";
import { GET_ALL_MOVIES, GET_MOVIES_BY_TITLE } from "../queries/getMovies";
import "../style/MovieSearch.css";
import { DisplayMovies } from "./DisplayMovies";
import { Pagination } from "./Pagination";
import SearchBar from "./SearchBar";

function TestComp() {
  // If titleIsEmpty, load all movies. If the title is not empty, load the movies with the stirng it is searched for

  const { loading, error, data } = useQuery(GET_ALL_MOVIES, {
    variables: {
      offset: 0 * E.PAGE_SIZE,
      limit: E.PAGE_SIZE,
    },
  });

  if (loading) return <p>Loading data ...</p>;
  console.log(error?.message);

  if (error) return <p>Could not load movies ...</p>;

  return <p>{data.movies.Series_Title}</p>;
}

export default TestComp;
