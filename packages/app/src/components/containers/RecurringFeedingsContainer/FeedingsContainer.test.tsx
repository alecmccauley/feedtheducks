import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { QUERY_FEEDINGS } from "./feedings";
import FeedingsContainer from ".";

const mocks = [
  {
    request: {
      query: QUERY_FEEDINGS,
    },
    result: {
      data: {
        Feedings: [
          {
            id: "5eadd286e638e242bb4d9e25",
            numberOfDucks: 15,
            __typename: "Feeding",
          },
        ],
      },
    },
  },
];

it("renders without error", async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <FeedingsContainer />
    </MockedProvider>
  );

  await waitForElementToBeRemoved(() => getByText("Loading..."));
  expect(getByTestId("temp")).toBeInTheDocument();
  expect(getByTestId("temp")).toContainHTML("5eadd286e638e242bb4d9e25");
});
