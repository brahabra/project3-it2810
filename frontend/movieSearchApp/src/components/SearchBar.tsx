import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../style/SearchBar.css";

interface Props {
  title: string;
  setTitle: (value: string) => void;
}

export default function SearchBar(props: Props) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmit = () => { 
    props.setTitle(search);
  };

  return (
    <div className="searchBar">
      <TextField  className="searchInput"
        label="Enter the title of your movie ..."
        type="text"
        onChange={onChangeSearch}
        value={search}
      />
      <Button className="searchButton" variant="outlined" onClick={onSubmit}>Submit</Button>
    </div>
  );
}
