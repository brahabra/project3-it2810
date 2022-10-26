export interface IMovie {
  IMDB_Rating: String;
  Released_Year: String;
  Series_Title: String;
}

export interface IMovies {
  movieList: IMovie[];
}

export interface IExtendedMovie extends IMovie {
  Certificate: String;
  Director: String;
  Genre: String;
  Gross: String;
  Meta_score: String;
  No_of_Votes: String;
  Overview: String;
  Poster_Link: string;
  Runtime: String;
  Star1: String;
  Star2: String;
  Star3: String;
  Star4: String;
}
