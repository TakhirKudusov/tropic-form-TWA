import { SpinnerIos } from "@styled-icons/fluentui-system-filled";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <Wrapper>
      <SpinnerIcon />
    </Wrapper>
  );
};

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const SpinnerIcon = styled(SpinnerIos)`
  height: 50px;
  width: 50px;
  justify-self: center;
  align-self: center;
  color: #006b56;
  animation: ${spinAnimation} linear infinite 0.5s;
`;

export default Spinner;
