import { MockedProvider } from "@apollo/client/testing";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import MovieSearch from "./MovieSearch";

const ReactTestRenderer = require("react-test-renderer");

afterEach(cleanup);

it("renders", async () => {
  const testRenderer = ReactTestRenderer.create(
    // <MockedProvider>
    //   <MovieSearch />
    // </MockedProvider>
    <p>test</p>
  );
  console.log(testRenderer);
});
