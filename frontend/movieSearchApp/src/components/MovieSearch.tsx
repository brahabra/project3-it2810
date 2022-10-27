import { useState } from "react";
import SearchBar from "./SearchBar";
import "../style/MovieSearch.css";
import SearchByTitle from "./SearchByTitle";
import GetAllMovies from "./GetAllMovies";
import SearchByGenre from "./SearchByGenre";
import SearchByTitleAndGenre from "./SearchByTitleAndGenre";
import SearchByTitleAndGenreSorted from "./SearchByTitleAndGenreSorted";
import FilterGenre from "./FilterGenre";
import SortByAttribute from "./SortByAttribute";

function MovieSearch() {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [sorting, setSorting] = useState<string>("");
  const [sortingDirection, setSortingDirection] = useState<string>("");

  function setQuery() {
    if (title && !genre && !sorting) {
      return <SearchByTitle title={title} setTitle={setTitle} />;
    } else if (!title && genre && !sorting) {
      return <SearchByGenre title={title} genre={genre} setTitle={setTitle} />;
    } else if (title && genre && sorting) {
      return (
        <SearchByTitleAndGenreSorted
          title={title}
          genre={genre}
          setTitle={setTitle}
        />
      );
    } else if (title && genre && !sorting) {
      return (
        <SearchByTitleAndGenre
          title={title}
          genre={genre}
          setTitle={setTitle}
        />
      );
    } else {
      return <GetAllMovies title={title} setTitle={setTitle} />;
    }
  }

  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} />
      <FilterGenre genre={genre} setGenre={setGenre} />
      <SortByAttribute
        sorting={sorting}
        setSorting={setSorting}
        sortingDirection={sortingDirection}
        setSortingDirection={setSortingDirection}
      />
      {setQuery()}
    </div>
  );
}

export default MovieSearch;
