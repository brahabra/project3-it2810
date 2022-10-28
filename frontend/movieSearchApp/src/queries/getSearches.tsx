import { gql } from "@apollo/client";

export const GET_SEARCHES = gql`
query {
  searches {
    title
  }
}
`;


/*export const GET_SEARCHES = gql`
query {$offset: Int, $limit: Int} {
  searches(options: { offset: $offset, limit: $limit }) {
    title
  }
}
`;
*/