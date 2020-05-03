import gql from "graphql-tag";

export const TOGGLE_RECURRING = gql`
  mutation ToggleFeeding($id: String!) {
    ToggleRecurringFeedingActive(id: $id)
  }
`;
