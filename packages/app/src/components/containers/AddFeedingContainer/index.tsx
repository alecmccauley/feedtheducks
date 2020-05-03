import { Formik } from "formik";
import React, { FunctionComponent } from "react";
import validation from "./validation";

// TEMP WIL MOVE
interface AddFeedingInput {
  numberOfDucks: number;
}

export interface AddFeedingContainerProps {
  Render: FunctionComponent;
}

const AddFeedingContainer: FunctionComponent<AddFeedingContainerProps> = ({
  Render,
}) => {
  const initialValues: AddFeedingInput = {
    numberOfDucks: 0,
  };

  const onSubmit = (
    values: AddFeedingInput,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {};

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
