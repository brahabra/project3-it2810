import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

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
    <div>
      <TextField
        label="Movie Title"
        type="text"
        onChange={onChangeSearch}
        value={search}
      />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
}
