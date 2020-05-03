import * as Yup from "yup";

const validation = Yup.object({
  numberOfDucks: Yup.number().required("Required").integer("Must be a number."),
  lat: Yup.number().required("Required"),
  lng: Yup.number().required("Required"),
  dateTime: Yup.date().required("Required"),
  howMuchFood: Yup.number().required("Required"),
  typeOfFood: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
});

export default validation;
