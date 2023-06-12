import { Link } from "preact-router";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <PreTitle>Welcome to</PreTitle>
      <StaffAnyTitle>StaffAny</StaffAnyTitle>
      <SubTitle>🥔 Potato Edition</SubTitle>
      <StyledForm>
        <StyledFormLabel>Your Phone Number</StyledFormLabel>
        <StyledTextInput type="number" placeholder="+62" />
        <Link href="/">
          <StyledSubmit
            onClick={(e) => {
              e.preventDefault;
            }}
          >
            Login
          </StyledSubmit>
        </Link>
      </StyledForm>
    </Container>
  );
};

const StaffAnyTitle = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 56px;

  color: #45beb4;

  margin-bottom: 0px;
  margin-top: 0px;
`;
const PreTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #9b9b9b;
`;
const SubTitle = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;
const StyledFormLabel = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #5e5e5e;
`;
const StyledTextInput = styled.input`
  box-sizing: border-box;

  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 255px;
  height: 40px;

  background: #ffffff;
  color: #000000;

  border: 1px solid #d9d9d9;
  border-radius: 4px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  width: 100%;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledSubmit = styled.button`
  padding: 8px 24px;
  gap: 8px;

  width: 100%;
  height: 40px;
  left: 31px;
  top: 246px;

  background: #45beb4;
  border-radius: 4px;
  border: none;

  margin-top: 12px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
`;

export default Login;
