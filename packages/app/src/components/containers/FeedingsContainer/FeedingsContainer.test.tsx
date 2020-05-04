import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { QUERY_FEEDINGS } from "./feedings";
import FeedingsContainer from ".";
import FeedingsRender from "../../render/FeedingsRender";
import result from "./feedings.testdata.json";

const mocks = [
  {
    request: {
      query: QUERY_FEEDINGS,
    },
    result,
  },
];

describe("Feedings Container", () => {
  it("renders without error", async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FeedingsContainer Render={FeedingsRender} />
      </MockedProvider>
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));
    expect(getByText("Person 1")).toBeInTheDocument();
    expect(getByText("Person 2")).toBeInTheDocument();
  });
});
