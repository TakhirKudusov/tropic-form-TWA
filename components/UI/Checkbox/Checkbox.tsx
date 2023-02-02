import styled from "styled-components";
import { FormName } from "@/common/types/types";
import { ChangeEvent, FC, memo } from "react";

type Props = {
  name: FormName;
  value: boolean;
  onChange: (e: ChangeEvent<any>) => void;
};
const Checkbox: FC<Props> = ({ name, value, onChange }) => {
  return (
    <Container>
      <StyledRadioBtn
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
      />
      <Text>Да</Text>
    </Container>
  );
};

const Text = styled.p`
  font-family: "Exo 2";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d1d00;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  column-gap: 16px;
  align-items: center;
`;

const StyledRadioBtn = styled.input`
  display: flex;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 2px solid #006b56;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  place-content: center;
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    transform: scale(0);
    box-shadow: inset 12px 12px #006b56;
  }
  &:checked::before {
    transform: scale(1);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
`;

export default memo(Checkbox);
