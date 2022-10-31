import { gql } from "@apollo/client";

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
