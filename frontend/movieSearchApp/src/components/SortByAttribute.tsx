import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import "../style/SortByAttribute.css";

interface Props {
  sortingDirection: string;
  setSortingDirection: (value: string) => void;
}
// Component to show sorting options and handle click on a options
export default function SortByAttribute(props: Props) {
  return (
    <div className="sortingContainer">
      <FormControl fullWidth className="sortingOptions" variant="filled">
        <InputLabel>Show first</InputLabel>
        <Select
          value={props.sortingDirection}
          label="Order"
          onChange={(event: SelectChangeEvent) =>
            props.setSortingDirection(event.target.value)
          }
        >          
          <MenuItem value={"DESC"}>Highest IMDB Rating</MenuItem>
          <MenuItem value={"ASC"}>Lowest IMDB Rating</MenuItem>
        </Select>
      </FormControl>
      <div className="tooltip"><InfoIcon style={{ color: 'white' }}/>
        <span className="tooltiptext">Is always sorted by relevance first</span>
      </div>
    </div>
  );
}
