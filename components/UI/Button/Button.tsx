import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

type ButtonType = "primary" | "outlined";

type Props = {
  btnType: ButtonType;
  children: ReactNode;
};

const Button: FC<Props> = ({ btnType, children }) => {
  return <StyledBtn btnType={btnType}>{children}</StyledBtn>;
};

const StyledBtn = styled.button<{ btnType: ButtonType }>`
  height: 40px;
  width: 100%;
  border-radius: 100px;
  column-gap: 11px;
  cursor: pointer;
  font-family: "Exo 2";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1px;
  ${({ btnType }) => {
    switch (btnType) {
      case "primary":
        return css`
          border: none;
          background: #006b56;
          color: #ffffff;
        `;
      case "outlined":
        return css`
          border: 1px solid #6f7975;
          background: #ffffff;
          color: #006b56;
        `;
    }
  }}
`;

export default Button;
