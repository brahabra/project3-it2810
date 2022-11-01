import { MockedProvider } from "@apollo/client/testing";
import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { GET_ALL_MOVIES, GET_MOVIES_BY_TITLE } from "../queries/getMovies";
import MovieSearch from "../components/MovieSearch";
import TestComp from "../components/testFile";

const ReactTestRenderer = require("react-test-renderer");

const mocks = [
  {
    request: {
      query: GET_ALL_MOVIES,
      variables: {
        options: {
          offset: 0,
          limit: 5,
          sort: {
            IMDB_Rating: "DESC"
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

const error =
{
  request: {
    query: GET_ALL_MOVIES,
    variables: {
      options: {
        offset: 0,
        limit: 5,
        sort: {
          IMDB_Rating: "DESC"
        }
      }
    },
  },
  error: new Error("An error occured")
};

afterEach(cleanup);

it("renders", async () => {
  render(
    <React.StrictMode>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MovieSearch />
      </MockedProvider>
    </React.StrictMode>
  );
  expect(await screen.findByText("Loading data ...")).toBeInTheDocument();
  expect(await screen.findByText(/movie/)).toBeInTheDocument();
});

it("renders error", async () => {
  render(
    <React.StrictMode>
      <MockedProvider mocks={[error]} addTypename={false}>
        <MovieSearch />
      </MockedProvider>
    </React.StrictMode>
  );
  expect(await screen.findByText("Loading data ...")).toBeInTheDocument();
  expect(await screen.findByText("Could not load movies ...")).toBeInTheDocument();
});

it("renders correctly", async () => {
  const tree = ReactTestRenderer.create(
    <React.StrictMode>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MovieSearch />
      </MockedProvider>
    </React.StrictMode>
  ).toJSON()
  expect(tree).toMatchSnapshot();
})