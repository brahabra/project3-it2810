import { gql } from "@apollo/client";

export const CREATE_SEARCHES = gql`
  mutation createSearches($title: String!){
    createSearches(input: { title: $title}) {
      searches {
        title
      }
    }
  }
`;