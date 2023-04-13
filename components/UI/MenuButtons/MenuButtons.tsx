import styled from "styled-components";
import Button from "@/components/UI/Button/Button";
import DoneSVG from "@/public/assets/svg/DoneSVG";
import TrashSVG from "@/public/assets/svg/TrashSVG";
import { FC, memo } from "react";

type Props = {
  disabled?: boolean;
};
const MenuButtons: FC<Props> = ({ disabled = false }) => {
  return (
    <Wrapper>
      <Container>
        <Button type="submit" btnType="primary" disabled={disabled}>
          <DoneIcon />
          Отправить
        </Button>
        <Button type="reset" btnType="outlined">
          <TrashIcon />
          Стереть
        </Button>
      </Container>
    </Wrapper>
  );
};

const TrashIcon = styled(TrashSVG)`
  height: 12px;
  width: 12px;
  & path {
    fill: #006b56;
  }
`;

const DoneIcon = styled(DoneSVG)`
  height: 12px;
  width: 12px;
  & path {
    fill: white;
  }
`;

const Container = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  background-color: white;
  padding: 10px;
`;
export default memo(MenuButtons);
