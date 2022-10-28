import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import "../style/SearchBar.css";
import { useMutation } from "@apollo/client";
import { CREATE_SEARCHES } from "../queries/createSearches";

interface Props {
  title: string;
  setTitle: (value: string) => void;
}

export default function SearchBar(props: Props) {
  const [search, setSearch] = useState(props.title);
  const [addSearch, { data, loading, error }] = useMutation(CREATE_SEARCHES);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmit = () => {
    props.setTitle(search.trim());
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
      props.setTitle(search.trim());
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
      <Button className="searchButton" variant="contained" onClick={onSubmit}>
        Search
      </Button>
    </div>
  );
}
