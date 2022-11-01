import { gql } from "@apollo/client";

// Mutation for creating a search. This can be found in the search log
export const CREATE_SEARCHES = gql`
  mutation createSearches($title: String!, $created: DateTime!) {
    createSearches(input: { title: $title, created: $created }) {
      searches {
        title
        created
      }
    }
  }
`;
