import React from "react";
import logo from "./assets/svg/logo.svg";
import { MovieTableComp } from "./components/movieTable";
import { IMovie } from "./interfaces/IMovie";
import "./style/App.css";

function App() {
  const testList:IMovie[] = [{
    Series_Title: "Movie1", Released_Year: "2015", IMDB_Rating: "1"
  },
  {
    Series_Title: "Movie2", Released_Year: "2016", IMDB_Rating: "4"
  },
  {
    Series_Title: "Movie3", Released_Year: "2017", IMDB_Rating: "2"
  },
  {
    Series_Title: "Movie4", Released_Year: "2013", IMDB_Rating: "3"
  },
  {
    Series_Title: "Movie5", Released_Year: "2006", IMDB_Rating: "7"
  },
  {
    Series_Title: "Movie6", Released_Year: "4000", IMDB_Rating: "8"
  }]

  return <MovieTableComp movieList={testList}></MovieTableComp>;
}

export default App;
