import * as yup from "yup";

const Schema = yup.object().shape({
  firstName: yup.string().required().min(10),
  lastName: yup.string().required(),
});

export default Schema;
