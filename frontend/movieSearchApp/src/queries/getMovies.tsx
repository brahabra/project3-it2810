import { gql } from "@apollo/client";

export const GET_MOVIES_BY_TITLE = gql`
  query FindMovieByTitle($searchString: String, $offset: Int, $limit: Int) {
    findMovieByTitle(
      searchString: $searchString
      offset: $offset
      limit: $limit
    ) {
      Poster_Link
      Series_Title
      Released_Year
      Certificate
      Runtime
      Genre
      IMDB_Rating
      Overview
      Meta_score
      Director
      Star1
      Star2
      Star3
      Star4
      No_of_Votes
      Gross
    }
  }
`;

export const GET_ALL_MOVIES = gql`
  query ($offset: Int, $limit: Int) {
    movies(options: { offset: $offset, limit: $limit }) {
      Poster_Link
      Series_Title
      Released_Year
      Certificate
      Runtime
      Genre
      IMDB_Rating
      Overview
      Meta_score
      Director
      Star1
      Star2
      Star3
      Star4
      No_of_Votes
      Gross
    }
  }
`;
