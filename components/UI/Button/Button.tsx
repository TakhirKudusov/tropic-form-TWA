import { FC, memo, ReactNode } from "react";
import styled, {css, keyframes} from "styled-components";
import {Spinner3} from "@styled-icons/evil/Spinner3"
type ButtonType = "primary" | "outlined" | "secondary";

type Props = {
  btnType: ButtonType;
  children: ReactNode;
  type: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  isRadio?: boolean;
  onClickHandler?: () => void;
};

const Button: FC<Props> = ({
  btnType,
  children,
  type,
  disabled = false,
  isRadio = false,
  onClickHandler = () => undefined,
    isLoading
}) => {
  return (
    <StyledBtn
      type={type}
      btnType={btnType}
      disabled={disabled || isLoading}
      isRadio={isRadio}
      onClick={onClickHandler}
    >
      {isLoading ? <Spinner /> : children}
    </StyledBtn>
  );
};

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  } 
    to {
    transform: rotate(360deg);
    }
`

const Spinner = styled(Spinner3)`
  width: 24px;
  height: 24px;
  animation: ${spinAnimation} 1s linear infinite;
`

const StyledBtn = styled.button<{ btnType: ButtonType; isRadio: boolean }>`
  height: 40px;
  width: ${({ isRadio }) => (isRadio ? "40px" : "100%")};
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
      case "secondary":
        return css`
          border: none;
          background: linear-gradient(
              0deg,
              rgba(0, 107, 86, 0.05),
              rgba(0, 107, 86, 0.05)
            ),
            #fffbe6;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
            0 1px 3px 1px rgba(0, 0, 0, 0.15);
        `;
    }
  }}
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export default memo(Button);
