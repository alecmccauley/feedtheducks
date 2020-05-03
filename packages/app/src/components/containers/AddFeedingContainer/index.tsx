import { Formik } from "formik";
import React, { FunctionComponent, useContext } from "react";
import {
  AddFeedingInput,
  useAddFeedingMutation,
} from "../../../generated/graphql";
import validation from "./validation";
import showUserFeedback from "../../../helpers/showUserFeedback";
import EmitterContext from "../../../contexts/emitter";

export interface AddFeedingContainerProps {
  Render: FunctionComponent;
  onSuccess: () => void;
}

const AddFeedingContainer: FunctionComponent<AddFeedingContainerProps> = ({
  Render,
  onSuccess,
}) => {
  const [addFeeding, { data }] = useAddFeedingMutation();
  const emitter = useContext(EmitterContext);

  const initialValues: AddFeedingInput = {
    name: "",
    numberOfDucks: 0,
    lat: 0,
    lng: 0,
    dateTime: new Date(),
    howMuchFood: 0,
    typeOfFood: "",
  };

  const onSubmit = async (
    values: AddFeedingInput,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    console.log(values);
    try {
      await addFeeding({
        variables: {
          data: values,
        },
      });
    } catch {
      setSubmitting(false);
      if (emitter) showUserFeedback(emitter, "Something went wrong.", "error");
    }
    setSubmitting(false);
    onSuccess();
    if (emitter)
      showUserFeedback(emitter, "Successfully recorded feeding!", "success");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values, setSubmitting);
      }}
    >
      <Render />
    </Formik>
  );
};

export default AddFeedingContainer;
