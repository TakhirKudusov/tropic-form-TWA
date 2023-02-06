import Form from "@/components/Form/Form";
import styled from "styled-components";
import { WindowTg } from "@/common/types/types";

const Main = () => {
  return (
    <StyledMain>
      <FormWrapper>
        <Header>
          <HeaderText>Tropic Bot</HeaderText>
          <DescriptionText>
            Заполните форму актуальными данными и&nbsp;мы&nbsp;обязательно
            свяжемся с&nbsp;Вами!{" "}
          </DescriptionText>
        </Header>
        <Form />
      </FormWrapper>
    </StyledMain>
  );
};

const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 20px;
  max-width: 400px;
`;

const HeaderText = styled.h1`
  font-weight: 400;
  font-size: 42px;
  line-height: 48px;
  text-align: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 14px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 24px;
  background-image: linear-gradient(135deg, #fffbe6, rgba(0, 107, 86, 0.14));
  background-size: 100% 160px;
  background-repeat: no-repeat;
  row-gap: 42px;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

export default Main;
