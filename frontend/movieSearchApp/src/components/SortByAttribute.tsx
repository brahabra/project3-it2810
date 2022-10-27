import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import "../style/SortByAttribute.css";

interface Props {
  sorting: string;
  setSorting: (value: string) => void;
  sortingDirection: string;
  setSortingDirection: (value: string) => void;
}

export default function SortByAttribute(props: Props) {
  return (
    <div className="sortingOptions">
      <FormControl fullWidth>
        <InputLabel>Sort by ...</InputLabel>
        <Select
          value={props.sorting}
          label="Sort options"
          onChange={(event: SelectChangeEvent, child) =>
            props.setSorting(event.target.value)
          }
        >
          <MenuItem value={"IMDB_Rating"}>IMDB Rating</MenuItem>
          <MenuItem value={"Series_Title"}>Title</MenuItem>
          <MenuItem value={"Released_Year"}>Released Year</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Order</InputLabel>
        <Select
          value={props.sortingDirection}
          label="Order"
          onChange={(event: SelectChangeEvent, child) =>
            props.setSortingDirection(event.target.value)
          }
        >
          <MenuItem value={"Ascending"}>Ascending</MenuItem>
          <MenuItem value={"Deafult"}>Deafult</MenuItem>
          <MenuItem value={"Descending"}>Descending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
