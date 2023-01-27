import styled from "styled-components";

const Select = () => {
  return (
    <StyledSelect>
      <StyledOption value="Тбилиси">Тбилиси</StyledOption>
      <StyledOption value="Сухуми">Сухуми</StyledOption>
      <StyledOption value="Батуми">Батуми</StyledOption>
      <StyledOption value="Хинкали">Хинкали</StyledOption>
      <StyledOption value="Хачапури">Хачапури</StyledOption>
    </StyledSelect>
  );
};

const StyledOption = styled.option`
  height: 56px;
  padding: 8px 24px 8px 16px;
`;

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
`;

export default Select;
