import React from "react";
import { render } from "@testing-library/react";
import AddFeedingContainer from ".";
import AddFeedingRender from "../../render/AddFeedingRender";

it("renders without error", async () => {
  const { getAllByText } = render(
    <AddFeedingContainer Render={AddFeedingRender} />
  );
  expect(getAllByText("How many ducks did you feed?")[0]).toBeInTheDocument();
});
