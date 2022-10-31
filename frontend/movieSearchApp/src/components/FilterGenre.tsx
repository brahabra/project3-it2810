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
    <div className="filterOptions">
      <FormControl fullWidth>
        <InputLabel>Genre</InputLabel>
        <Select
          value={props.genre}
          label="Genre"
          onChange={(event: SelectChangeEvent, child) =>
            props.setGenre(event.target.value)
          }
        >
          {/* TODO: Legge til støtte for default verdi? */}
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
