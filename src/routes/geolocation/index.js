import { route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";

const Geolocation = () => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [err, setErr] = useState(false);

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setErr(true);
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };
  useEffect(() => {
    getGeoLocation();
  });

  return (
    <Container>
      <Header>
        <h1>Geolocation</h1>
      </Header>
      <Content>
        {err ? <p>Geolocation is not supported by this browser.</p> : null}
        <h1>Latitude: {lat}</h1>
        <h1>Longitude: {long}</h1>
      </Content>
      <Footer>
        <ConfirmButton onClick={() => route("/home2")}>Confirm</ConfirmButton>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  align-items: center;
`;
const Footer = styled.div`
  background-color: #ffffff;
`;
const Content = styled.div`
  background-color: #d9d9d9;
  padding 10px;
`;
const ConfirmButton = styled.button`
  padding: 8px 24px;

  width: 100%;
  height: 40px;

  background: #45beb4;
  border-radius: 4px;

  border: none;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  margin-top: 20px;
`;

export default Geolocation;
