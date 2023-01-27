import { FormikHelpers, useFormik } from "formik";
import { FORM_SCHEMA, initialValues } from "@/components/Form/constants";
import Select from "@/components/UI/Select/Select";
import Input from "@/components/UI/Input/Input";
import styled from "styled-components";

const Form = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: FORM_SCHEMA,
    onReset<Values>(
      values: Values,
      formikHelpers: FormikHelpers<Values>
    ): void {
      console.log(values);
    },
    onSubmit<Values>(
      values: Values,
      formikHelpers: FormikHelpers<Values>
    ): void | Promise<any> {
      console.log(values);
    },
  });

  return (
    <StyledForm onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
      <Title>Указать город</Title>
      <Select />
      <Title>Указать цену</Title>
      <Input />
      <Title>Указать площадь</Title>
      <Input />
      <Title>Указать кол-во комнат</Title>
      <Input />
      <Title>Указать район</Title>
      <Select />
    </StyledForm>
  );
};

const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-top: 10px;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

export default Form;
