import { useState } from "preact/hooks";
import styled from "styled-components";
import DailyCard from "../../components/DailyCard/index.js";
import ClockedInCard from "../../components/ClockedInCard/index.js";
import ClockedOutCard from "../../components/ClockedOutCard/index.js";

const Home = () => {
  const [time, setTime] = useState(Date.now());

  return (
    <Container>
      <StyledName>Hey Royhan Mardista!</StyledName>
      <StyledDate>
        {new Date(time).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </StyledDate>
      <DailyCard />
      <ClockedInCard />
      <ClockedOutCard />
    </Container>
  );
};

const StyledName = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;

  color: #000000;

  margin: 0px;
`;
const StyledDate = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #000000;

  margin: 0px;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Home;
