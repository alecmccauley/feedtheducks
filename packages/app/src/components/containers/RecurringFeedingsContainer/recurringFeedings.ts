import gql from "graphql-tag";

export const QUERY_RECURRING = gql`
  query GetRecurring {
    RecurringFeedings {
      id
      active
      name
      location {
        lat
        lng
      }
      numberOfDucks
    }
  }
`;
