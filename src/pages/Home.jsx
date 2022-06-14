import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Home = () => {
  return (
    <>
      <Container>
        <div style={{ height: "100%" }}>
          <video autoPlay muted loop style={{ width: "100%" }}>
            <source src="../../videos/GoldenDuck.mp4" type="video/mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Link to="/Login">
              <img src="../../travel.png" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-y: "hidden";
  height: "100vh";
`;

export default Home;
