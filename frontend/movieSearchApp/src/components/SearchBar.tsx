import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../style/SearchBar.css";
import { makeVar, useMutation } from "@apollo/client";
import { CREATE_SEARCHES } from "../queries/createSearches";
import { GET_SEARCHES } from "../queries/getSearches";
import { PAGE_OPTIONS } from "../enum";

// Apollo Local State Mangement variable
export const titleSearchedFor = makeVar<string>("");

export default function SearchBar() {
  const [search, setSearch] = useState(titleSearchedFor());
  const d = new Date();

  // String of invalid characters
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/]+/;

  // Createa search
  const [addSearch, { loading, error }] = useMutation(CREATE_SEARCHES, {
    refetchQueries: [
      {
        query: GET_SEARCHES,
        variables: {
          options: {
            offset: 0,
            limit: PAGE_OPTIONS.SEARCHES_SIZE,
            sort: {
              created: "DESC",
            },
          },
        },
      },
      "getSearches",
    ],
  });

  // Called every time a character is entered in input field
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!format.test(event.target.value)) {
      setSearch(event.target.value);
    } else {
      alert(
        "Invalid character typed! The character was not added to your search."
      );
    }
  };

  // Adds the word searched for to the database
  function addToSearchLog() {
    titleSearchedFor(search.trim());
    if (search.trim()) {
      addSearch({
        variables: {
          title: search,
          created: d.toISOString(),
        },
      });
    }
  }

  const onSubmit = () => {
    addToSearchLog();
  };

  // Handle that the user can search after a word with clicking "Enter"
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
