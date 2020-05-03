import gql from "graphql-tag";

export const QUERY_FEEDINGS = gql`
  mutation AddFeeding($data: AddFeedingInput!) {
    addFeeding(data: $data) {
      id
      numberOfDucks
      location {
        lat
        lng
      }
      name
    }
  }
`;
