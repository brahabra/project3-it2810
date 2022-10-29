import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import MovieSearch from "./MovieSearch";

//const ReactTestRenderer = require("react-test-renderer");

afterEach(cleanup);

it("renders", async () => {

  const mocks:any = [];

  render(
    <React.StrictMode>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MovieSearch />
      </MockedProvider>
    </React.StrictMode>
  );
  expect(await screen.findByText("Loading data ...")).toBeInTheDocument();
});