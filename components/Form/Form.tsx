import { FormikHelpers, useFormik } from "formik";
import { FORM_SCHEMA, initialValues } from "@/components/Form/constants";
import Select from "@/components/UI/Select/Select";
import Input from "@/components/UI/Input/Input";
import styled from "styled-components";
import Divider from "@/components/UI/Divider/Divider";
import Checkbox from "@/components/UI/Checkbox/Checkbox";
import UploadButton from "@/components/UI/UploadButton/UploadButton";
import MenuButtons from "@/components/UI/MenuButtons/MenuButtons";
import TextArea from "@/components/UI/TextArea/TextArea";

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
      <Divider />
      <Title>Указать район</Title>
      <Select />
      <Divider />
      <Title>Указать цену</Title>
      <Input placeholder="Цена" />
      <Divider />
      <Title>Указать площадь</Title>
      <Input placeholder="Площадь" />
      <Divider />
      <Title>Указать кол-во комнат</Title>
      <Input placeholder="Количество комнат" />
      <Divider />
      <Title>Можно с животными</Title>
      <Checkbox />
      <Divider />
      <Title>Добавить описание</Title>
      <TextArea placeholder="Описание" />
      <Divider />
      <Title>Загрузите фото</Title>
      <UploadButton />
      <MenuButtons />
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
  padding-bottom: 40px;
`;

export default Form;
