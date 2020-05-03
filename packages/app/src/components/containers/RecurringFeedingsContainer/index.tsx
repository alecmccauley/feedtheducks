import React, { FunctionComponent, useContext, useEffect } from "react";
import {
  useGetRecurringQuery,
  useToggleFeedingMutation,
  useDailyFeedingMutation,
} from "./../../../generated/graphql";
import { CircularProgress } from "@material-ui/core";
import { RecurringFeedingsRenderProps } from "../../render/RecurringFeedingsRender";
import EmitterContext from "../../../contexts/emitter";
import showUserFeedback from "../../../helpers/showUserFeedback";

interface RecurringFeedingsContainerProps {
  Render: FunctionComponent<RecurringFeedingsRenderProps>;
}

const RecurringFeedingsContainer: FunctionComponent<RecurringFeedingsContainerProps> = ({
  Render,
}) => {
  const { data, error, loading, refetch } = useGetRecurringQuery();
  const [toggleActive] = useToggleFeedingMutation();
  const [triggerFeedings] = useDailyFeedingMutation();
  const emitter = useContext(EmitterContext);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const onTriggerDailyFeedings = async () => {
    let result;
    try {
      result = await triggerFeedings();
    } catch {
      if (emitter) showUserFeedback(emitter, "Something went wrong.", "error");
    }
    if (emitter)
      showUserFeedback(
        emitter,
        `${result?.data?.TriggerRecurringFeedings} daily feedings were triggered!`,
        "success"
      );
  };

  const onToggle = async (id: string) => {
    let result;
    try {
      result = await toggleActive({
        variables: {
          id,
        },
      });
    } catch {
      if (emitter) showUserFeedback(emitter, "Something went wrong.", "error");
    }
    if (emitter)
      showUserFeedback(emitter, "Updated recurring feeding", "success");
    return result?.data?.ToggleRecurringFeedingActive;
  };

  if (loading) {
    return <CircularProgress />;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return (
    <Render
      recurringFeedings={data}
      onToggle={onToggle}
      onTriggerDailyFeedings={onTriggerDailyFeedings}
    />
  );
};
export default RecurringFeedingsContainer;
