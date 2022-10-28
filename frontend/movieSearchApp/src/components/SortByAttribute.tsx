import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import "../style/SortByAttribute.css";

interface Props {
  sortingDirection: string;
  setSortingDirection: (value: string) => void;
}

export default function SortByAttribute(props: Props) {
  return (
    <div className="sortingOptions">
      <Typography>Sort By IMDB Rating: </Typography>

      <FormControl fullWidth>
        <InputLabel>Show first</InputLabel>
        <Select
          value={props.sortingDirection}
          label="Order"
          onChange={(event: SelectChangeEvent, child) =>
            props.setSortingDirection(event.target.value)
          }
        >          
          <MenuItem value={"DESC"}>Highest Rating</MenuItem>
          <MenuItem value={"ASC"}>Lowest Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
