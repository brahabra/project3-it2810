import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import { formControlClasses, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { GET_SEARCHES } from "../queries/getSearches";
import MovieSearch from "./MovieSearch";
import { titleSearchedFor } from "./SearchBar";
import "../style/DisplaySearches.css";
import { PAGE_OPTIONS } from "../enum";
import { Search } from "@mui/icons-material";
import { Pagination } from "./Pagination";
import { useState } from "react";

interface Props {
  setShowSearches: (value: boolean) => void;
}

export default function DisplaySearches(props: Props) {
  const title = useReactiveVar(titleSearchedFor);
  /*const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);*/
  // Not working with search log... the word searched for is not showing instant in search log if we use this query with variables
  const { data, loading, error } = useQuery(GET_SEARCHES, {
    variables: {
      options: {
        offset: 0,
        limit: PAGE_OPTIONS.PAGE_SIZE,
        sort: {
          created: "DESC",
        },
      },
    },
  });

  function handleSearchWordClick(clickedSearchWord: string) {
    titleSearchedFor(clickedSearchWord);
    props.setShowSearches(false);
  }

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Could not load searches ...</p>;

  function showSearches() {
    return data?.searches.map(
      ({ title, created }: { title: string; created: string }) => (
        <IconButton
          className="searchText"
          onClick={() => handleSearchWordClick(title)}
          key={created}
        >
          <SearchIcon />
          {title}{" "}
          <p className="dateText">&nbsp;&nbsp; {created.slice(0, 10)}</p>
        </IconButton>
      )
    );
  }

  return (
    <div className="displaySearchesContainer">
      <h2 className="displaySearchesHeader">
        Showing the last {PAGE_OPTIONS.SEARCHES_SIZE} searches
      </h2>
      {data.searches.length > 0 ? (
        showSearches()
      ) : (
        <p>No searches registered!</p>
      )}
      {/*<Pagination
        listLength={data.searches.length}
        offset={offset}
        currentPage={currentPage}
        setOffset={setOffset}
        setCurrentPage={setCurrentPage}
      />*/}
    </div>
  );
}
