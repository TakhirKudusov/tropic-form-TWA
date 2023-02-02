import styled, { css } from "styled-components";
import UploadSVG from "@/public/assets/svg/UploadSVG";
import { FormName, MyFormData } from "@/common/types/types";
import {
  ChangeEvent,
  FC,
  ForwardedRef,
  forwardRef,
  memo,
  RefObject,
  useCallback,
} from "react";
import { FormikErrors } from "formik";
import Button from "@/components/UI/Button/Button";
import CloseSVG from "@/public/assets/svg/CloseSVG";

type Props = {
  name: FormName;
  value: any;
  disabled?: boolean;
  changeHandler: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<MyFormData>> | Promise<void>;
};
const UploadButton = forwardRef(
  (
    { name, value, changeHandler, disabled = false }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleChangeUpload = (e: ChangeEvent<HTMLInputElement>) => {
      if (value.length < 10 && e?.currentTarget?.files?.[0]) {
        const newValue = [...value, e?.currentTarget?.files?.[0]];
        changeHandler("photos", newValue);
      }
    };

    const handleClearImages = useCallback(() => {
      changeHandler("photos", []);
      if ((ref as RefObject<HTMLInputElement>)?.current) {
        (ref as RefObject<HTMLInputElement>).current!.value = "";
      }
    }, []);

    return (
      <Wrapper>
        <input
          ref={ref}
          type="file"
          accept="image/*,image/jpeg"
          id="upload_btn"
          hidden
          name={name}
          value={value.image}
          onChange={handleChangeUpload}
          disabled={disabled}
        />
        <Label htmlFor="upload_btn" disabled={disabled}>
          <UploadIcon /> Выберите фото
        </Label>
        <Button
          type="button"
          btnType="secondary"
          disabled={value.length === 0}
          isRadio={true}
          onClickHandler={handleClearImages}
        >
          <CloseIcon />
        </Button>
      </Wrapper>
    );
  }
);

const CloseIcon = styled(CloseSVG)`
  height: 12px;
  width: 12px;
  & path {
    fill: #006b56;
  }
`;

const UploadIcon = styled(UploadSVG)`
  height: 12px;
  width: 12px;
  & path {
    fill: #006b56;
  }
`;

const Label = styled.label<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Exo 2";
  cursor: pointer;
  height: 40px;
  gap: 8px;
  border-radius: 100px;
  padding: 14px 19px 14px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #006b56;
  background: linear-gradient(
      0deg,
      rgba(0, 107, 86, 0.05),
      rgba(0, 107, 86, 0.05)
    ),
    #fffbe6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.7;
      &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 107, 86, 0.05),
            rgba(0, 107, 86, 0.05)
          ),
          #fffbe6;
      }
    `}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 11px;
`;
export default memo(UploadButton);
