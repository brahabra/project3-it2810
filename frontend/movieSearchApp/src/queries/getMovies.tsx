import { gql } from "@apollo/client";

export const GET_MOVIES = (title: string) => gql`
  query getMoviesByTitle($title: String!) {
    movies(where: { Series_Title_CONTAINS: $title }) {
      Poster_Link
      Series_Title
      IMDB_Rating
    }
  }
`;
