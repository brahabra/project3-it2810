import { gql } from "@apollo/client";

// Query to get all searches
// This will be used in DisplaySearches.tsx
export const GET_SEARCHES = gql`
  query getSearches($options: SearchOptions!) {
    searches(options: $options) {
      title
      created
    }
  }
`;
