import { useState } from "preact/hooks";
import styled from "styled-components";
const Home = () => {
  const [time, setTime] = useState(Date.now());

  return (
    <div>
      <StyledName>Hey Royhan Mardista!</StyledName>
      <StyledDate>
        {new Date(time).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </StyledDate>
    </div>
  );
};

const StyledName = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;

  color: #000000;
`;
const StyledDate = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #000000;
`;

export default Home;
