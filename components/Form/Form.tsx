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
import { useEffect, useRef, useState } from "react";
import { generateUniqueId, handleSubmitForm } from "@/components/Form/helpers";
import { MyFormData } from "@/common/types/types";

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const uploadRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues,
    validationSchema: FORM_SCHEMA,
    onReset<Values>(
      values: MyFormData,
      formikHelpers: FormikHelpers<Values>
    ): void | Promise<any> {
      if (uploadRef?.current) {
        uploadRef.current.value = "";
      }
    },
    onSubmit<Values>(
      values: MyFormData,
      formikHelpers: FormikHelpers<Values>
    ): void | Promise<any> {
      const uniqueId = generateUniqueId("user-", "-id");
      handleSubmitForm(values, uniqueId);
    },
  });

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
    if (formik.values.city !== "Тбилиси" && isMounted) {
      formik.setFieldValue("district", "");
    }
  }, [formik.values.city]);

  return (
    <StyledForm
      onReset={formik.handleReset}
      onSubmit={formik.handleSubmit}
      encType="multipart/form-data"
    >
      <Title>Указать город</Title>
      <Select
        name="city"
        data={cities}
        dataType="cities"
        value={formik.values.city}
        onChange={formik.handleChange}
        required={true}
      />
      <Divider />
      <Title>Указать район</Title>
      <Select
        name="district"
        data={districts}
        dataType="districts"
        value={formik.values.district}
        onChange={formik.handleChange}
        disabled={formik.values.city !== "Тбилиси"}
      />
      <Divider />
      <Title>Указать цену, $</Title>
      <Input
        name="cost"
        placeholder="Цена, $"
        value={formik.values.cost}
        onChange={formik.handleChange}
      />
      {formik.errors.cost ? (
        <ErrorMessage>{formik.errors.cost}</ErrorMessage>
      ) : null}
      <Divider />
      <Title>Указать площадь</Title>
      <Input
        name="square"
        placeholder="Площадь"
        value={formik.values.square}
        onChange={formik.handleChange}
      />
      {formik.errors.square ? (
        <ErrorMessage>{formik.errors.square}</ErrorMessage>
      ) : null}
      <Divider />
      <Title>Указать кол-во комнат</Title>
      <Input
        name="roomsQuantity"
        placeholder="Количество комнат"
        value={formik.values.roomsQuantity}
        onChange={formik.handleChange}
      />
      {formik.errors.roomsQuantity ? (
        <ErrorMessage>{formik.errors.roomsQuantity}</ErrorMessage>
      ) : null}
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
      {formik.errors.description ? (
        <ErrorMessage>{formik.errors.description}</ErrorMessage>
      ) : null}
      <Divider />
      <Title>Загрузите фото</Title>
      <UploadButton
        ref={uploadRef}
        name="photos"
        value={formik.values.photos}
        changeHandler={formik.setFieldValue}
        disabled={formik.values.photos.length >= 10}
      />
      <PhotoCounterText>
        Добавлено фото: {formik.values.photos.length}
      </PhotoCounterText>
      <MenuButtons />
    </StyledForm>
  );
};

const PhotoCounterText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #4b635b;
  font-weight: 500;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #ba1a1a;
`;

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
