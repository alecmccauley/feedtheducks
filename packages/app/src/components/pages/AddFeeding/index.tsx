import React, { FunctionComponent } from "react";
import AddFeedingContainer from "../../containers/AddFeedingContainer";
import AddFeedingRender from "../../render/AddFeedingRender";
import StandardPage from "../../core/StandardPage";

const AddFeeding: FunctionComponent = () => {
  return (
    <StandardPage title="Add Feeding">
      <AddFeedingContainer Render={AddFeedingRender} />
    </StandardPage>
  );
};

export default AddFeeding;
