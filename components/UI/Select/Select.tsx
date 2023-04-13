import styled from "styled-components";
import { City, District, FormName } from "@/common/types/types";
import { ChangeEvent, FC, memo } from "react";

type Props = {
  data: (City | District)[];
  dataType: "cities" | "districts";
  name: FormName;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  disabled?: boolean;
  required?: boolean;
};
const Select: FC<Props> = ({
  data,
  dataType,
  name,
  value,
  onChange,
  disabled = false,
  required = false,
}) => {
  return (
    <StyledSelect
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
    >
      <option value="" disabled selected>
        {dataType === "cities" ? "Город" : "Район"}
      </option>
      {dataType === "cities" &&
        (data as City[]).map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      {dataType === "districts" &&
        (data as District[]).map((el) => (
          <optgroup key={el.main} label={el.main}>
            {el.subDistricts.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </optgroup>
        ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  font-family: "Exo 2";
  appearance: none;
  border: none;
  width: 100%;
  display: flex;
  padding: 8px 24px 8px 16px;
  height: 56px;
  background: linear-gradient(
      0deg,
      rgba(0, 107, 86, 0.08),
      rgba(0, 107, 86, 0.08)
    ),
    #fffbe6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #1d1d00;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export default memo(Select);
