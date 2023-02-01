import styled from "styled-components";
import UploadSVG from "@/public/assets/svg/UploadSVG";
const UploadButton = () => {
  return (
    <Wrapper>
      <input type="file" id="upload_btn" hidden />
      <Label htmlFor="upload_btn">
        <UploadIcon /> Выберите фото
      </Label>
    </Wrapper>
  );
};

const UploadIcon = styled(UploadSVG)`
  height: 12px;
  width: 12px;
  & path {
    fill: #006b56;
  }
`;

const Label = styled.label`
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
  transition: 0.1s linear;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 107, 86, 0.08),
        rgba(0, 107, 86, 0.08)
      ),
      #fffbe6;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 11px;
`;
export default UploadButton;
