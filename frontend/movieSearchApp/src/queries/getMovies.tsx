import { gql } from "@apollo/client";

export const GET_MOVIES = (title: string) => gql`
  query getMoviesByTitle($title: String!, $offset: Int, $limit: Int) {
    movies(where: { Series_Title_CONTAINS: $title }, options: { offset: $offset, limit: $limit }) {
      Poster_Link
      Series_Title
      IMDB_Rating
    }
  }
`;
