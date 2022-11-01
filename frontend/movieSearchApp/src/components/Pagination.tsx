import { Button, IconButton } from "@mui/material";
import { PAGE_OPTIONS } from "../enum";
import { IExtendedMovie } from "../interfaces/IMovie";
import "../style/Pagination.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowBackIos } from "@mui/icons-material";
import { ClassNames } from "@emotion/react";

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

      <p className="pageText">Page {props.currentPage + 1}</p>

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
