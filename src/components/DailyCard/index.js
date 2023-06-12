import styled from "styled-components";

const DailyCard = () => {
  return (
    <Container>
      <Row>
        <SectionName>Section 3X</SectionName>
        <SectionCode>S3X</SectionCode>
      </Row>
      <OrgName>Potato Org</OrgName>
      <Divider />
      <ShiftString>Today 09:00 - 18:00 | 9h</ShiftString>
      <RoleName>Role</RoleName>
      <ClockInButton>Clock-in</ClockInButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  padding: 14px;

  margin-bottom: 8px;
`;
const ClockInButton = styled.button`
  height: 60px;

  background: #45beb4;
  border-radius: 4px;
  border: none;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;
const SectionName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;

  color: #000000;

  margin: 0px;
`;
const OrgName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #5e5e5e;

  margin: 0px;
  margin-bottom: 10px;
`;
const SectionCode = styled.button`
  width: 41px;
  height: 22px;

  background: #ffffff;

  border: 1px solid #9b9b9b;
  border-radius: 4px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #000000;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ShiftString = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #000000;

  margin: 0px;
  margin-top: 10px;
`;
const RoleName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #5e5e5e;

  margin-bottom: 14px;
  margin-top: 4px;
`;
const Divider = styled.div`
  border-top: 1px solid #d9d9d9;
`;
export default DailyCard;
