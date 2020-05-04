import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  fireEvent,
  act,
} from "@testing-library/react";
import { MockedProvider, wait } from "@apollo/react-testing";
import { QUERY_RECURRING } from "./recurringFeedings";
import result from "./recurringFeedings.testdata.json";
import RecurringFeedingsContainer from ".";
import RecurringFeedingsRender from "../../render/RecurringFeedingsRender";

const mocks = [
  {
    request: {
      query: QUERY_RECURRING,
    },
    result,
  },
];

describe("Feedings Container", () => {
  it("renders without error", async () => {
    const { getByText, getByTestId, getByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RecurringFeedingsContainer Render={RecurringFeedingsRender} />
      </MockedProvider>
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));
    expect(getByText("Person 1")).toBeInTheDocument();
    expect(getByText("28")).toBeInTheDocument();
  });
});
