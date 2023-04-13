import styled from "styled-components";
import { ChangeEvent, FC, memo } from "react";
import { FormName } from "@/common/types/types";

type Props = {
  placeholder: string;
  name: FormName;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
};
const Input: FC<Props> = ({ placeholder, name, value, onChange }) => {
  return (
    <Container>
      <StyledInput
        type="text"
        required
        name={name}
        value={value}
        onChange={onChange}
      />
      <StyledLabel>{placeholder}</StyledLabel>
    </Container>
  );
};

const Container = styled.div`
  height: 56px;
`;

const StyledLabel = styled.label`
  font-family: "Exo 2";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  color: #006b56;
  position: relative;
  bottom: 40px;
  left: 16px;
  pointer-events: none;
  transition: 0.1s all linear;
`;

const StyledInput = styled.input`
  transition: 0.1s all linear;
  display: flex;
  padding: 12px 16px 16px;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 4px;
  border: 2px solid #006b56;
  outline: none;
  font-family: "Exo 2";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #1d1d00;

  &:hover {
    border-color: #00483a;
  }

  &:focus {
    border-color: #002f27;
  }

  &:focus ~ label,
  &:not(:focus):valid ~ label {
    font-size: 13px;
    line-height: 20px;
    bottom: 68px;
    background-color: white;
    left: 16px;
    padding: 0 5px;
  }
`;

export default memo(Input);
