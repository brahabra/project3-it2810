import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query FindMovieByTitle($searchString: String, $offset: Int, $limit: Int) {
    findMovieByTitle(searchString: $searchString, offset: $offset, limit: $limit) {
      Series_Title,
      Released_Year,
      IMDB_Rating
    }
  }
`;
