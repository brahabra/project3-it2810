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

// Component to show genres and handle click on a genre
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
        {/* Handle click on a genre */}
        <InputLabel>Genre</InputLabel>
        <Select
          value={props.genre}
          label="Genre"
          onChange={(event: SelectChangeEvent) =>
            props.setGenre(event.target.value)
          }
        >
           {/* Display the genres by mapping genresList */}
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
