import { useState } from "react";
import SearchBar from "./SearchBar";
import "../style/MovieSearch.css";
import SearchByTitle from "./SearchByTitle";
import GetAllMovies from "./GetAllMovies";
import SearchByGenre from "./SearchByGenre";
import SearchByTitleAndGenre from "./SearchByTitleAndGenre";
import SearchByTitleAndGenreSorted from "./SearchByTitleAndGenreSorted";


function MovieSearch() {
  const [title, setTitle] = useState<string>("");
  const [filter, setFilter] = useState<string>("War");
  const [sorting, setSorting] = useState<string>("");
  const [sortingDirection, setDirection] = useState<string>("")

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
      <SearchBar title={title} setTitle={setTitle} />
      {Child()}
    </div>
  );
}

export default MovieSearch;
