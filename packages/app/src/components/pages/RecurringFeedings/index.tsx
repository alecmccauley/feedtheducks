import React, { FunctionComponent } from "react";
import RecurringFeedingsContainer from "../../containers/RecurringFeedingsContainer";
import RecurringFeedingsRender from "../../render/RecurringFeedingsRender";

const RecurringFeedings: FunctionComponent = () => {
  return <RecurringFeedingsContainer Render={RecurringFeedingsRender} />;
};

export default RecurringFeedings;
