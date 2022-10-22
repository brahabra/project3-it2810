import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_MOVIES } from "../queries/getMovies";
import SearchBar from "./SearchBar";

function MovieSearch() {
  const [title, setTitle] = useState<string>("matrix");

  function DisplayMovies2() {
    const { loading, error, data } = useQuery(GET_MOVIES, {
      variables: { searchString: title },
    });

    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log(error.message)
      return <p>Error :(</p>;
    }
    if (data) {
      console.log(data)
      return data.findMovieByTitle.map(
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
    }


  return (
    <>
      <SearchBar title={title} setTitle={setTitle} />
      <DisplayMovies2 />
    </>
  );
}

export default MovieSearch;
