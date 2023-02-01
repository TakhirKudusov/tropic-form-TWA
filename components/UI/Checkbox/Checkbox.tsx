import styled from "styled-components";

const Checkbox = () => {
  return (
    <Container>
      <StyledRadioBtn />
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

const StyledRadioBtn = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 2px solid #006b56;
  cursor: pointer;
`;

export default Checkbox;
