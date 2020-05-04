import React, { FunctionComponent, useEffect } from "react";
import { FeedingsRenderProps } from "../../render/FeedingsRender";
import { useGetFeedingsQuery } from "./../../../generated/graphql";
import { CircularProgress } from "@material-ui/core";

interface FeedingsContainerProps {
  Render: FunctionComponent<FeedingsRenderProps>;
}

const FeedingsContainer: FunctionComponent<FeedingsContainerProps> = ({
  Render,
}) => {
  const { data, error, loading, refetch } = useGetFeedingsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <CircularProgress data-testid="loading" />;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <Render feedings={data} />;
};
export default FeedingsContainer;
