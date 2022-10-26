import "./style/App.css";
import { useQuery, gql } from "@apollo/client";
import SearchBar from "./components/SearchBar";
import MovieSearch from "./components/MovieSearch";
import { useState } from "react";
import React from "react";
import logo from "./assets/svg/logo.svg";
import { MovieTableComp } from "./components/MovieTable";
import { IMovie } from "./interfaces/IMovie";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <MovieSearch/>
    </div>
  );
}

export default App;