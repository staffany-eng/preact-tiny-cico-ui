import { route } from "preact-router";
import styled from "styled-components";

const ClockedInCard = () => {
  return (
    <Container>
      <Row>
        <SectionName>Section 3X</SectionName>
        <SectionCode>S3X</SectionCode>
      </Row>
      <OrgName>Potato Org</OrgName>
      <Divider />

      <ClockOutButton onClick={() => route("/home3")}>Clock-out</ClockOutButton>
      <BreakButton>Start Break</BreakButton>

      <Row>
        <Timing name="CLOCK IN" number="09:00" />
        <Timing name="CLOCK OUT" number="-" />
        <Timing name="BREAK" number="30 m" />
      </Row>
    </Container>
  );
};

const Timing = (props) => {
  return (
    <Col>
      <TimingName>{props.name}</TimingName>
      <TimingNumber>{props.number}</TimingNumber>
    </Col>
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
const ClockOutButton = styled.button`
  height: 60px;

  background: #fdcc71;
  border-radius: 4px;
  border: none;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  margin-bottom: 8px;
`;
const BreakButton = styled.button`
  height: 60px;

  background: #ffffff;
  border-radius: 4px;
  border: 2px solid #fdcc71;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #fdcc71;
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

const Divider = styled.div`
  border-top: 1px solid #d9d9d9;
`;

const TimingName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #5e5e5e;

  margin: 0px;
  margin-top: 15px;
`;
const TimingNumber = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: #000000;

  margin: 0px;
  margin-top: 10px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default ClockedInCard;
