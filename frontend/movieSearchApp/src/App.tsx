import "./style/App.css";
import { useQuery, gql } from "@apollo/client";
import SearchBar from "./components/SearchBar";
import MovieSearch from "./components/MovieSearch";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <MovieSearch/>
    </div>
  );
}

export default App;
