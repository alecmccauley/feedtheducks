import gql from "graphql-tag";

export const ADD_FEEDING = gql`
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
