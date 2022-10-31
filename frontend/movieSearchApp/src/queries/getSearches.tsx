import { gql } from "@apollo/client";

export const GET_SEARCHES = gql`
  query getSearches($options: SearchOptions!) {
    searches(options: $options) {
      title
      created
    }
  }
`;
