import { Formik } from "formik";
import React, { FunctionComponent } from "react";
import validation from "./validation";
import {
  AddFeedingInput,
  useAddFeedingMutation,
} from "../../../generated/graphql";

export interface AddFeedingContainerProps {
  Render: FunctionComponent;
}

const AddFeedingContainer: FunctionComponent<AddFeedingContainerProps> = ({
  Render,
}) => {
  const [addFeeding, { data }] = useAddFeedingMutation();

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
    await addFeeding({
      variables: {
        data: values,
      },
    });
    setSubmitting(false);
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
