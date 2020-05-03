import * as React from "react";
import { useGetFeedingsQuery } from "./../../../generated/graphql";

const FeedingsContainer = () => {
  const { data, error, loading } = useGetFeedingsQuery();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <div data-testid="temp">{JSON.stringify(data)}</div>;
};
export default FeedingsContainer;
