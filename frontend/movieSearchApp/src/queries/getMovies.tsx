import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query FindMovieByTitle($searchString: String, $offset: Int, $limit: Int) {
    findMovieByTitle(searchString: $searchString, offset: $offset, limit: $limit) {
      Poster_Link,
      Series_Title,
      IMDB_Rating
    }
  }
`;
