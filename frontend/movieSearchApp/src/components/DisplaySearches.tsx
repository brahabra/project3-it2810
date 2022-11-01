import { useQuery } from "@apollo/client";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { GET_SEARCHES } from "../queries/getSearches";
import { titleSearchedFor } from "./SearchBar";
import "../style/DisplaySearches.css";
import { PAGE_OPTIONS } from "../enum";

interface Props {
  setShowSearches: (value: boolean) => void;
}

// Component that displays the searches that the user have searched for
export default function DisplaySearches(props: Props) {
  const { data, loading, error } = useQuery(GET_SEARCHES, {
    variables: {
      options: {
        offset: 0,
        limit: PAGE_OPTIONS.SEARCHES_SIZE,
        sort: {
          created: "DESC",
        },
      },
    },
  });
  
  // If a search word is clicked, set the word as current search word and change which components is visible
  function handleSearchWordClick(clickedSearchWord: string) {
    titleSearchedFor(clickedSearchWord);
    props.setShowSearches(false);
  }

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Could not load searches ...</p>;
  
  // If we have searches, view the searches. The search word and when it was searched after is showing. 
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
      {/*If we have data, show the data. If not, show feedback to the user */}
      {data.searches.length > 0 ? (
        showSearches()
      ) : (
        <p>No searches registered!</p>
      )}
    </div>
  );
}
