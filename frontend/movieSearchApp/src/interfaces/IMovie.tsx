export interface IMovie {
  IMDB_Rating: string;
  Released_Year: string;
  Series_Title: string;
}

export interface IMovies {
  movieList: IMovie[];
}

export interface IExtendedMovie extends IMovie {
  Certificate: string;
  Director: string;
  Genre: string;
  Gross: string;
  Meta_score: string;
  No_of_Votes: string;
  Overview: string;
  Poster_Link: string;
  Runtime: string;
  Star1: string;
  Star2: string;
  Star3: string;
  Star4: string;
}
