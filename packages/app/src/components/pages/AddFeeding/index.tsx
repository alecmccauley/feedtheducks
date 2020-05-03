import React, { FunctionComponent } from "react";
import AddFeedingContainer from "../../containers/AddFeedingContainer";
import AddFeedingRender from "../../render/AddFeedingRender";
import StandardPage from "../../core/StandardPage";
import { useHistory } from "react-router-dom";

const AddFeeding: FunctionComponent = () => {
  const history = useHistory();

  const onSuccess = () => {
    history.push("/");
  };
  return (
    <StandardPage title="Add Feeding">
      <AddFeedingContainer Render={AddFeedingRender} onSuccess={onSuccess} />
    </StandardPage>
  );
};

export default AddFeeding;
