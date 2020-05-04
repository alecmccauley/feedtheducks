import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  fireEvent,
  act,
} from "@testing-library/react";
import { MockedProvider, wait } from "@apollo/react-testing";
import { ADD_FEEDING } from "./addFeeding";
import AddFeedingContainer from ".";
import AddFeedingRender from "../../render/AddFeedingRender";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const mocks = [
  {
    request: {
      query: ADD_FEEDING,
    },
    result: {},
  },
];

const onSuccess = jest.fn();

describe("Feedings Container", () => {
  it("renders without error", async () => {
    const { getByText } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <AddFeedingContainer
            Render={AddFeedingRender}
            onSuccess={onSuccess}
          />
        </MockedProvider>
      </MuiPickersUtilsProvider>
    );

    expect(getByText("Record Feeding")).toBeInTheDocument();
  });
});
