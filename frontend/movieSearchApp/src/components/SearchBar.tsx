import React, { useEffect, useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "../style/SearchBar.css";
import { makeVar, useMutation, useReactiveVar } from "@apollo/client";
import { CREATE_SEARCHES } from "../queries/createSearches";

export const titleSearchedFor = makeVar<string>("");

export default function SearchBar() {
  const [search, setSearch] = useState(titleSearchedFor());
  const [addSearch, { data, loading, error }] = useMutation(CREATE_SEARCHES);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmit = () => {
    titleSearchedFor(search.trim());
    if (search.trim()) {
      addSearch({
        variables: {
          title: search,
        },
      });
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      titleSearchedFor(search.trim());
    }
  };

  return (
    <div className="searchBar">
      <TextField
        className="searchInput"
        placeholder="Enter the title of your movie ..."
        label="Title of movie"
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
