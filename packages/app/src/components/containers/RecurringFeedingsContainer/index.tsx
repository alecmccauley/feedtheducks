import React, { FunctionComponent, useContext } from "react";
import {
  useGetRecurringQuery,
  useToggleFeedingMutation,
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
  const { data, error, loading } = useGetRecurringQuery();
  const [toggleActive] = useToggleFeedingMutation();
  const emitter = useContext(EmitterContext);
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
  return <Render recurringFeedings={data} onToggle={onToggle} />;
};
export default RecurringFeedingsContainer;