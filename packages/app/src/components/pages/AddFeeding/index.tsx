import React, { FunctionComponent } from "react";
import AddFeedingContainer from "../../containers/AddFeedingContainer";
import AddFeedingRender from "../../render/AddFeedingRender";

const AddFeeding: FunctionComponent = () => {
  return <AddFeedingContainer Render={AddFeedingRender} />;
};

export default AddFeeding;
