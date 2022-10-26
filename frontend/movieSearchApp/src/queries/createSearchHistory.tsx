import { gql } from "@apollo/client";

export const CREATE_SEARCH_HISTORY = gql`
  mutation createSearchHistory($email: String!, $titles: String!) {
    createUsers(input: { email: $email, titles: $titles }) {
      users {
        email
        titles
      }
    }
  }
`;