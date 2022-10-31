import { useQuery } from "@apollo/client";
import console from "console";
import { PAGE_OPTIONS } from "../enum";
import { GET_ALL_MOVIES } from "../queries/getMovies";
import "../style/MovieSearch.css";

function TestComp() {
  // If titleIsEmpty, load all movies. If the title is not empty, load the movies with the stirng it is searched for

  const { loading, error, data } = useQuery(GET_ALL_MOVIES, {
    variables: {
      offset: 0 * PAGE_OPTIONS.PAGE_SIZE,
      limit: PAGE_OPTIONS.PAGE_SIZE,
    },
  });

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Could not load movies ...</p>;

  return <p>{data.movies.Series_Title}</p>;
}

export default TestComp;
