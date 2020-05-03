import gql from "graphql-tag";

export const QUERY_FEEDINGS = gql`
  query GetFeedings {
    Feedings {
      id
      numberOfDucks
    }
  }
`;
