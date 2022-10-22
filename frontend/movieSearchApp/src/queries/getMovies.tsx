import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query FindMovieByTitle($searchString: String) {
    findMovieByTitle(searchString: $searchString) {
      Poster_Link,
      Series_Title,
      IMDB_Rating
    }
  }
`;
