import * as yup from "yup";

const initialValues = {
  city: "",
  cost: "",
  square: "",
  roomsQuantity: "",
  district: "",
  allowingPets: null,
  description: "",
};

const FORM_SCHEMA = yup.object().shape({
  city: yup.string().required(),
  cost: yup.string().required(),
  square: yup.string().required(),
  roomsQuantity: yup.string().required(),
  district: yup.string().required(),
  allowingPets: yup.boolean().required(),
  description: yup.string().required(),
});

export { initialValues, FORM_SCHEMA };
