import { useState } from "react";
import SearchBar from "./SearchBar";
import "../style/MovieSearch.css";
import SearchByTitle from "./SearchByTitle";
import GetAllMovies from "./GetAllMovies";
import SearchByGenre from "./SearchByGenre";
import SearchByTitleAndGenre from "./SearchByTitleAndGenre";
import FilterGenre from "./FilterGenre";
import SortByAttribute from "./SortByAttribute";

function MovieSearch() {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [sortingDirection, setSortingDirection] = useState<string>("DESC");

  function setQuery() {
    if (title && !genre) {
      return (
        <SearchByTitle
          sortingDirection={sortingDirection}
          title={title}
          setTitle={setTitle}
        />
      );
    } else if (!title && genre) {
      return (
        <SearchByGenre
          sortingDirection={sortingDirection}
          genre={genre}
          setTitle={setTitle}
        />
      );
    } else if (title && genre) {
      return (
        <SearchByTitleAndGenre
          title={title}
          genre={genre}
          setTitle={setTitle}
          sortingDirection={sortingDirection}
        />
      );
    } else {
      return (
        <GetAllMovies
          sortingDirection={sortingDirection}
          title={title}
          setTitle={setTitle}
        />
      );
    }
  }

  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} />
      <FilterGenre genre={genre} setGenre={setGenre} />
      <SortByAttribute
        sortingDirection={sortingDirection}
        setSortingDirection={setSortingDirection}
      />
      {setQuery()}
    </div>
  );
}

export default MovieSearch;
