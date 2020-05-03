import React, { FunctionComponent } from "react";
import FeedingsContainer from "../../containers/FeedingsContainer";
import FeedingsRender from "../../render/FeedingsRender";
import RecurringFeedingsContainer from "../../containers/RecurringFeedingsContainer";
import RecurringFeedingsRender from "../../render/RecurringFeedingsRender";

const RecurringFeedings: FunctionComponent = () => {
  return <RecurringFeedingsContainer Render={RecurringFeedingsRender} />;
};

export default RecurringFeedings;
