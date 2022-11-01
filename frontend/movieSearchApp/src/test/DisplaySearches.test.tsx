import { MockedProvider } from "@apollo/client/testing";
import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { GET_SEARCHES } from "../queries/getSearches";
import DisplaySearches from "../components/DisplaySearches";

const ReactTestRenderer = require("react-test-renderer");

const mocks = [
  {
    request: {
      query: GET_SEARCHES, 
        variables: {
          options: {
            offset: 0,
            limit: 15,
            sort: {
              created: "DESC",
            }
          }
        },
    },
    result: {
      data: {
        searches: [{
          title: "The",
          created: "2022-11-01T19:44:25.884Z",
        }
      ],
      },
    },
  },
];

const error =
  {
    request: {
      query: GET_SEARCHES, 
        variables: {
          options: {
            offset: 0,
            limit: 15,
            sort: {
              created: "DESC",
            }
          }
        },
    },
    error: new Error("An error occurred")
  };

afterEach(cleanup);

it("renders DisplaySearches correctly", async () => {
  const setShowSearches = jest.fn();
  render(
    <React.StrictMode>
      <MockedProvider mocks={mocks} addTypename={false}>
        <DisplaySearches setShowSearches={setShowSearches} />
      </MockedProvider>
    </React.StrictMode>
  );
  expect(await screen.findByText("Loading data ...")).toBeInTheDocument();
  expect(await screen.findByText("The")).toBeInTheDocument();
});

it("renders error on DisplaySearches when send error", async () => {
  const setShowSearches = jest.fn();
  render(
    <React.StrictMode>
      <MockedProvider mocks={[error]} addTypename={false}>
        <DisplaySearches setShowSearches={setShowSearches} />
      </MockedProvider>
    </React.StrictMode>
  );
  expect(await screen.findByText("Loading data ...")).toBeInTheDocument();
  expect(await screen.findByText("Could not load searches ...")).toBeInTheDocument();
});

it("renders correctly and matches snapshot", async () => {
  const setShowSearches = jest.fn();
  const tree = ReactTestRenderer.create(
    <React.StrictMode>
      <MockedProvider mocks={mocks} addTypename={false}>
        <DisplaySearches setShowSearches={setShowSearches} />
      </MockedProvider>
    </React.StrictMode>
  ).toJSON()
  expect(tree).toMatchSnapshot();
})