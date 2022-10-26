import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query ($options: MovieOptions!) {
    movies(options: $options) {
      Series_Title
      Released_Year
      IMDB_Rating
    }
  }
`;

export const GET_MOVIES_BY_TITLE = gql`
  query findMovieByTitle($searchString: String!, $options: MovieOptions!) {
    findMovieByTitle(
      searchString: $searchString,
      options: $options)
    {
      Series_Title
      Released_Year
      IMDB_Rating
    }
  }
`;

export const GET_MOVIES_BY_GENRE_SORT_BY_RATING = gql`
  query findMovieByGenreSortByRating($filterString: String!, $options: MovieOptions!) {
    findMovieByGenreSortByRating(
    filterString: $filterString,
    options: $options
    )
    {
      Series_Title
      Released_Year
      IMDB_Rating
    }
  }
`;


export const GET_MOVIES_BY_TITLE_FILTER_BY_GENRE = gql`
  query findMovieByTitleWithGenreFilter($searchString: String!, $filterString: String!, $options: MovieOptions!) {
    findMovieByTitleWithGenreFilter(
    searchString: $searchString,
    filterString: $filterString,
    options: $options
    )
    {
      Series_Title
      Released_Year
      IMDB_Rating
    }
  }
`;


export const GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_SORT_BY_RATING = gql`
  query findMovieByTitleWithGenreFilterSortByRating($searchString: String!, $filterString: String!, $options: MovieOptions!) {
    findMovieByTitleWithGenreFilterSortByRating(
    searchString: $searchString,
    filterString: $filterString,
    options: $options
    )
    {
      Series_Title
      Released_Year
      IMDB_Rating
    }
  }
`;
