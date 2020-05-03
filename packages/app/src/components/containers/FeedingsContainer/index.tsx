import React, { FunctionComponent } from "react";
import { FeedingsRenderProps } from "../../render/FeedingsRender";
import { useGetFeedingsQuery } from "./../../../generated/graphql";
import { CircularProgress } from "@material-ui/core";

interface FeedingsContainerProps {
  Render: FunctionComponent<FeedingsRenderProps>;
}

const FeedingsContainer: FunctionComponent<FeedingsContainerProps> = ({
  Render,
}) => {
  const { data, error, loading } = useGetFeedingsQuery();
  if (loading) {
    return <CircularProgress />;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <Render feedings={data} />;
};
export default FeedingsContainer;
