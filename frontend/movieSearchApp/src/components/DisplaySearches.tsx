import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import { formControlClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { E } from "../enum";
import { GET_SEARCHES } from "../queries/getSearches";
import MovieSearch from "./MovieSearch";
import { titleSearchedFor } from "./SearchBar";
import "../style/DisplaySearches.css";

interface Props {
  showSearches: boolean;
  setShowSearches: (value: boolean) => void;
}

export default function DisplaySearches(props: Props) {
  //const { data, loading, error } = useQuery(GET_SEARCHES);
  const title = useReactiveVar(titleSearchedFor);
  useEffect(() => {}, [title]);

  // Not working with search log... the word searched for is not showing instant in search log if we use this query with variables
  const { data, loading, error } = useQuery(GET_SEARCHES, {
    variables: {
      offset: 0,
      limit: E.SEARCHES_SIZE,
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
      <h2 className="displaySearchesHeader">{E.SEARCHES_SIZE} last searches</h2>
      {data.searches.length > 0 ? (
        data?.searches.map(({ title }: { title: string }) => (
          <p
            className="searchText"
            onClick={() => handleSearchWordClick(title)}
          >
            {title}
          </p>
        ))
      ) : (
        <p>No searches registered!</p>
      )}
    </div>
  );
}
