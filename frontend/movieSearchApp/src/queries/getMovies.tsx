import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query FindMovieByTitle($searchString: String) {
    findMovieByTitle(searchString: $searchString) {
      Series_Title
    }
  }
`;
