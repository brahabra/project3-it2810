import React, { useEffect, useState } from "react";
import { TextField, Button, IconButton, Alert, Snackbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../style/SearchBar.css";
import { makeVar, useMutation, useReactiveVar } from "@apollo/client";
import { CREATE_SEARCHES } from "../queries/createSearches";
import { GET_SEARCHES } from "../queries/getSearches";
import { PAGE_OPTIONS } from "../enum";

export const titleSearchedFor = makeVar<string>("");

export default function SearchBar() {
  const [search, setSearch] = useState(titleSearchedFor());
  const d = new Date();
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/]+/;
  const [addSearch, { data, loading, error }] = useMutation(CREATE_SEARCHES, {
    refetchQueries: [
      {query: GET_SEARCHES, variables: {
        options: {
          offset: 0,
          limit: PAGE_OPTIONS.SEARCHES_SIZE,
          sort: {
            "created": "DESC"
          }
        }
      }},
      "getSearches"
    ],
  });
  
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(!format.test(event.target.value)){
      setSearch(event.target.value);
    }
    else {
      alert("Invalid character typed! The character was not added to your search.")
    }

  };

  function addToSearchLog() {
    titleSearchedFor(search.trim());
    if (search.trim()) {
      addSearch({
        variables: {
          title: search,
          created: d.toISOString()
        },
      });
    }
  }

  const onSubmit = () => {
    addToSearchLog();
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      addToSearchLog();
    }
  };

  if (loading) return <p>Saving search ...</p>;
  if (error) return <p>Could not save search ...</p>;

  return (
    <div className="searchBar">
      <TextField
        className="searchInput"
    
        placeholder="Enter the title of your movie ..."
        label="Title of movie"
        variant="filled"
        type="text"
        onChange={onChangeSearch}
        onKeyDown={handleKeyDown}
        value={search}
      />
      <IconButton className="searchButton" onClick={onSubmit}>
        <SearchIcon />
        Search
      </IconButton>
    </div>
  );
}
