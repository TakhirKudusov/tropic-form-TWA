import { FormikHelpers, useFormik } from "formik";
import {
  cities,
  districts,
  FORM_SCHEMA,
  initialValues,
} from "@/components/Form/constants";
import Select from "@/components/UI/Select/Select";
import Input from "@/components/UI/Input/Input";
import styled from "styled-components";
import Divider from "@/components/UI/Divider/Divider";
import Checkbox from "@/components/UI/Checkbox/Checkbox";
import UploadButton from "@/components/UI/UploadButton/UploadButton";
import MenuButtons from "@/components/UI/MenuButtons/MenuButtons";
import TextArea from "@/components/UI/TextArea/TextArea";
import { FormEvent } from "react";

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
      <Select
        name="city"
        data={cities}
        dataType="cities"
        value={formik.values.city}
        onChange={formik.handleChange}
      />
      <Divider />
      <Title>Указать район</Title>
      <Select
        name="district"
        data={districts}
        dataType="districts"
        value={formik.values.city !== "Тбилиси" ? "" : formik.values.district}
        onChange={formik.handleChange}
        disabled={formik.values.city !== "Тбилиси"}
      />
      <Divider />
      <Title>Указать цену</Title>
      <Input
        name="cost"
        placeholder="Цена"
        value={formik.values.cost}
        onChange={formik.handleChange}
      />
      <Divider />
      <Title>Указать площадь</Title>
      <Input
        name="square"
        placeholder="Площадь"
        value={formik.values.square}
        onChange={formik.handleChange}
      />
      <Divider />
      <Title>Указать кол-во комнат</Title>
      <Input
        name="roomsQuantity"
        placeholder="Количество комнат"
        value={formik.values.roomsQuantity}
        onChange={formik.handleChange}
      />
      <Divider />
      <Title>Можно с животными</Title>
      <Checkbox
        name="allowingPets"
        value={formik.values.allowingPets}
        onChange={formik.handleChange}
      />
      <Divider />
      <Title>Добавить описание</Title>
      <TextArea
        name="description"
        placeholder="Описание"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <Divider />
      <Title>Загрузите фото</Title>
      <UploadButton
        name="photos"
        value={formik.values.photos}
        onChange={formik.handleChange}
      />
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
