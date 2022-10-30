import { gql } from "@apollo/client";

export const GET_SEARCHES = gql`
query getSearches($offset: Int, $limit: Int) {
  searches(options: { offset: $offset, limit: $limit }) {
    title
  }
}
`;
