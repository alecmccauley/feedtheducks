import React, { FunctionComponent } from "react";
import FeedingsContainer from "../../containers/FeedingsContainer";
import FeedingsRender from "../../render/FeedingsRender";

const AllFeedings: FunctionComponent = () => {
  return <FeedingsContainer Render={FeedingsRender} />;
};

export default AllFeedings;
