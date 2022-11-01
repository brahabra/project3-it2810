import { IconButton } from "@mui/material";
import { PAGE_OPTIONS } from "../enum";
import { IExtendedMovie } from "../interfaces/IMovie";
import "../style/Pagination.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowBackIos } from "@mui/icons-material";

interface Props {
  movieList: IExtendedMovie[];
  offset: number;
  currentPage: number;
  setOffset: (value: number) => void;
  setCurrentPage: (value: number) => void;
}
// Handle pagination of the movies.
export const Pagination = (props: Props) => {
  return (
    <div className="pageNavigation">
      {/*Handle click on previous page button, disable if first page */}
      <IconButton
        className="prevButton"
        onClick={() => {
          props.setCurrentPage(props.currentPage - 1);
          window.scrollTo(0, 0);
        }}
        disabled={props.currentPage > 0 ? false : true}
      >
        <ArrowBackIos /> Prev page
      </IconButton>
      {/*Show current page */}
      <p className="pageText">Page {props.currentPage + 1}</p>

      {/*Handle click on next page button, disable if last page*/}
      <IconButton
        className="nextButton"
        onClick={() => {
          props.setCurrentPage(props.currentPage + 1);
          window.scrollTo(0, 0);
        }}
        disabled={
          props.movieList.length < PAGE_OPTIONS.PAGE_SIZE ? true : false
        }
      >
        Next page <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};
