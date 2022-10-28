import { IExtendedMovie } from "../../interfaces/IMovie";

const movieList: IExtendedMovie[] = [];

const nrMovies: number = 10;

for (let i = 0; i < nrMovies; i++) {
  movieList.push({
    Certificate: "certificate" + i,
    Director: "director" + i,
    Genre: "Horror",
    Gross: "gross" + i,
    Meta_score: String(i),
    No_of_Votes: String(i),
    Overview: "overview" + i,
    Poster_Link: "posters_link" + i,
    Runtime: "2:0" + i,
    Star1: "star" + i*i,
    Star2: "star" + i*i,
    Star3: "star" + i*i,
    Star4: "star" + i*i,
    IMDB_Rating: String(i),
    Released_Year: "200" + i,
    Series_Title: "Movie" + i,
  });
}

export const movieQueryProps = {movieList};
