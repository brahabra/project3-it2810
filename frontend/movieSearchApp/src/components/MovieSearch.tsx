import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

function MovieSearch() {
  //const [search, setSearch] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const GET_MOVIES = gql`
    query getMoviesByTitle($title: String!) {
      movies(where: { Series_Title_CONTAINS: $title }) {
        Poster_Link
        Series_Title
        IMDB_Rating
      }
    }
  `;

  function DisplayMovies2() {
    const { loading, error, data } = useQuery(GET_MOVIES, {
      variables: { title },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.movies.map(
      ({
        Poster_Link,
        Series_Title,
        IMDB_Rating,
      }: {
        Poster_Link: string;
        Series_Title: string;
        IMDB_Rating: string;
      }) => (
        <div key={Poster_Link}>
          <h3>{Series_Title}</h3>
          {/* <img width="450" height="450" alt="location-reference" src={`${Poster_Link.substring(0, 116)}`} /> */}
          <img
            width="50"
            height="50"
            alt="location-reference"
            src={`${Poster_Link}`}
          />
          <br />
          <p>IMDB Rating:{IMDB_Rating}</p>
          <br />
        </div>
      )
    );
  }

  return (
    <>
      <SearchBar title={title} setTitle={setTitle} />
      <DisplayMovies2 />
    </>
  );
}

export default MovieSearch;
