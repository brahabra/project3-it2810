import { Button } from "@mui/material";
import { PAGE_OPTIONS } from "../enum";
import { IExtendedMovie } from "../interfaces/IMovie";
import "../style/Pagination.css";

interface Props {
  movieList: IExtendedMovie[];
  offset: number;
  currentPage: number;
  setOffset: (value: number) => void;
  setCurrentPage: (value: number) => void;
}

export const Pagination = (props: Props) => {
  return (
    <div className="pageNavigation">
      <Button
        className="prevButton"
        onClick={() => {
          props.setCurrentPage(props.currentPage - 1);
          window.scrollTo(0, 0);
        }}
        variant="contained"
        disabled={props.currentPage > 0 ? false : true}
      >
        &larr; Prev page
      </Button>

      <p className="pageText">Page {props.currentPage + 1}</p>

      <Button
        className="nextButton"
        onClick={() => {
          props.setCurrentPage(props.currentPage + 1);
          window.scrollTo(0, 0);
        }}
        variant="contained"
        disabled={
          props.movieList.length < PAGE_OPTIONS.PAGE_SIZE ? true : false
        }
      >
        Next page &rarr;
      </Button>
    </div>
  );
};
