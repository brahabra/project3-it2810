import { gql } from "@apollo/client";

export const GET_MOVIES_BY_TITLE = gql`
  query FindMovieByTitle($searchString: String, $offset: Int, $limit: Int) {
    findMovieByTitle(
      searchString: $searchString
      offset: $offset
      limit: $limit
    ) {
      Series_Title
      Released_Year
      IMDB_Rating
    }
  }
`;

export const GET_ALL_MOVIES = gql`
  query ($offset: Int, $limit: Int) {
    movies(options: { offset: $offset, limit: $limit }) {
      Series_Title
      Released_Year
      IMDB_Rating
    }
  }
`;
