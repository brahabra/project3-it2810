import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import { formControlClasses, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { GET_SEARCHES } from "../queries/getSearches";
import MovieSearch from "./MovieSearch";
import { titleSearchedFor } from "./SearchBar";
import "../style/DisplaySearches.css";
import { PAGE_OPTIONS } from "../enum";

interface Props {
  setShowSearches: (value: boolean) => void;
}

export default function DisplaySearches(props: Props) {
  const title = useReactiveVar(titleSearchedFor);

  // Not working with search log... the word searched for is not showing instant in search log if we use this query with variables
  const { data, loading, error } = useQuery(GET_SEARCHES, {
    variables: {
      offset: 0,
      limit: PAGE_OPTIONS.SEARCHES_SIZE,
    },
  });

  function handleSearchWordClick(clickedSearchWord: string) {
    titleSearchedFor(clickedSearchWord);
    props.setShowSearches(false);
  }

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Could not load searches ...</p>;

  

  return (
    <div className="displaySearchesContainer">
      <h2 className="displaySearchesHeader">Showing the last {PAGE_OPTIONS.SEARCHES_SIZE} searches</h2>
      {data.searches.length > 0 ? (
        data?.searches.map(({ title }: { title: string }) => (
          <IconButton
            className="searchText"
            onClick={() => handleSearchWordClick(title)}
          >
            <SearchIcon />
            {title}
          </IconButton>
        ))
      ) : (
        <p>No searches registered!</p>
      )}
    </div>
  );
}
