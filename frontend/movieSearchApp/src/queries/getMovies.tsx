import { gql } from "@apollo/client";

// Query for getting all movies
export const GET_ALL_MOVIES = gql`
  query ($options: MovieOptions!) {
    movies(options: $options) {
      Poster_Link
      Series_Title
      Released_Year
      Runtime
      Genre
      IMDB_Rating
      Overview
      Director
      Star1
      Star2
      Star3
      Star4
    }
  }
`;

// Query for getting all movies with the selected genre
export const GET_ALL_MOVIES_FILTER_BY_GENRE = gql`
  query ($where: MovieWhere!, $options: MovieOptions!) {
    movies(where: $where, options: $options) {
      Poster_Link
      Series_Title
      Released_Year
      Runtime
      Genre
      IMDB_Rating
      Overview
      Director
      Star1
      Star2
      Star3
      Star4
    }
  }
`;

// Query for getting movies similar to the title searched for in descending order
export const GET_MOVIES_BY_TITLE = gql`
  query findMovieByTitleDESC($searchString: String!, $options: MovieOptions!) {
    findMovieByTitleDESC(
      searchString: $searchString,
      options: $options)
    {
      Poster_Link
      Series_Title
      Released_Year
      Runtime
      Genre
      IMDB_Rating
      Overview
      Director
      Star1
      Star2
      Star3
      Star4
    }
  }
`;

// Query for getting movies similar to the title searched for in ascending order
export const GET_MOVIES_BY_TITLE_ASC = gql`
  query findMovieByTitleASC($searchString: String!, $options: MovieOptions!) {
    findMovieByTitleASC(
      searchString: $searchString,
      options: $options)
    {
      Poster_Link
      Series_Title
      Released_Year
      Runtime
      Genre
      IMDB_Rating
      Overview
      Director
      Star1
      Star2
      Star3
      Star4
    }
  }
`;

// Query for getting movies with the selected title and genre in descending order
export const GET_MOVIES_BY_TITLE_FILTER_BY_GENRE = gql`
  query findMovieByTitleWithGenreFilter($searchString: String!, $filterString: String!, $options: MovieOptions!) {
    findMovieByTitleWithGenreFilterDESC(
    searchString: $searchString,
    filterString: $filterString,
    options: $options
    )
    {
      Poster_Link
      Series_Title
      Released_Year
      Runtime
      Genre
      IMDB_Rating
      Overview
      Director
      Star1
      Star2
      Star3
      Star4
    }
  }
`;

// Query for getting movies with the selected title and genre in ascending order
export const GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_ASC = gql`
  query findMovieByTitleWithGenreFilterASC($searchString: String!, $filterString: String!, $options: MovieOptions!) {
    findMovieByTitleWithGenreFilterASC(
    searchString: $searchString,
    filterString: $filterString,
    options: $options
    )
    {
      Poster_Link
      Series_Title
      Released_Year
      Runtime
      Genre
      IMDB_Rating
      Overview
      Director
      Star1
      Star2
      Star3
      Star4
    }
  }
`;