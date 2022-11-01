import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import "../style/FilterGenre.css";

interface Props {
  genre: string;
  setGenre: (value: string) => void;
}

export default function FilterGenre(props: Props) {
  const genresList = [
    "Drama",
    "War",
    "Action",
    "Comedy",
    "Crime",
    "History",
    "Thriller",
    "Sci-Fi",
    "Fantasy",
    "Family",
    "Music",
  ];

  return (
    <div className="filterContainer">
      <FormControl fullWidth className="filterOptions" variant="filled">
        <InputLabel>Genre</InputLabel>
        <Select
          value={props.genre}
          label="Genre"
          onChange={(event: SelectChangeEvent, child) =>
            props.setGenre(event.target.value)
          }
        >
          <MenuItem value={""}>None (default)</MenuItem>
          {genresList.map((genre, id) => (
            <MenuItem key={id} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
