import React from "react";
import { render } from "@testing-library/react";
import AddFeedingContainer from ".";

it("renders without error", async () => {
  const { getAllByText } = render(<AddFeedingContainer onSubmit={() => {}} />);
  expect(getAllByText("How many ducks did you feed?")[0]).toBeInTheDocument();
});
