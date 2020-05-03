import gql from "graphql-tag";

export const DAILY_FEEDINGS = gql`
  mutation DailyFeeding {
    TriggerRecurringFeedings
  }
`;
