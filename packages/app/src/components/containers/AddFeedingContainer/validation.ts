import * as Yup from "yup";

const validation = Yup.object({
  numberOfDucks: Yup.number().required("Required").integer(),
});

export default validation;
