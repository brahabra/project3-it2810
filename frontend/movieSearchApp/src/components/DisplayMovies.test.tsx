import { MockedProvider } from "@apollo/client/testing";
import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { GET_ALL_MOVIES } from "../queries/getMovies";
import MovieSearch from "./MovieSearch";
import TestComp from "./testFile";

//const ReactTestRenderer = require("react-test-renderer");

const mocks = [
  {
    request: {
      query: GET_ALL_MOVIES,
      variables: {
        options: {
          offset: 0,
          limit: 5,
          sort: {
            "IMDB_Rating": "DESC"
          }
        }
      },
    },
    result: {
      data: {
        movies: [{
            Poster_Link: "poster_link",
            Series_Title: "movie",
            Released_Year: "Released_Year",
            Certificate: "Certificate",
            Runtime: "Runtime",
            Genre: "Horror",
            IMDB_Rating: "10",
            Overview: "Overview",
            Meta_score: "8",
            Director: "Director",
            Star1: "Star1",
            Star2: "Star2",
            Star3: "Star3",
            Star4: "Star4",
            No_of_Votes: "300",
            Gross: "What",
          }
        ],
      },
    },
  },
];

afterEach(cleanup);

it("renders", async () => {
  const {container} = render(
    <React.StrictMode>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MovieSearch />
      </MockedProvider>
    </React.StrictMode>
  );
  expect(await screen.findByText("Loading data ...")).toBeInTheDocument();
  expect(await screen.findByText(/movie/)).toBeInTheDocument();

  screen.logTestingPlaygroundURL()
  //expect(await screen.findByText("Could not load movies ...")).toBeInTheDocument();
});
