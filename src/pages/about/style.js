import styled from "styled-components";
import EarthView from "../../images/nasaEarthView.jpg";
import EarthAstronaut from "../../images/earthAndAstronaut.jpg";
import Colors from "../../global/Theme";

import { motion } from "framer-motion";

export const Container = styled.section`
  width: 98.8vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PrimaryTheme};
  /* overflow-x: hidden; */
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  /* @media (min-width: 1000px) {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10%;
    flex-direction: row;
    justify-content: space-around;
  } */
`;

export const PresentationContainer = styled.section`
  width: 100%;

  height: 600px;
  /* border: 2px solid red; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: 190%;
  background-image: url(${EarthAstronaut});

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 500px) {
    height: 600px;
    background-size: 130%;
    justify-content: flex-start;

    background-image: url(${EarthView});
  }
`;

export const Presentation = styled(motion.div)`
  margin: 0 10px 0;
  opacity: 1;
  width: 100%;
  text-align: center;
  height: 500px;
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 500px) {
    margin: 0 50px 0;
    width: 500px;
    text-align: left;
    height: 400px;
    align-items: flex-start;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 22px;
  color: ${Colors.BasicYellow};
  text-shadow: ${(props) =>
    props.shadowUnable ? "" : "black 0.1em 0.1em 0.2em"};

  @media (min-width: 500px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled(motion.h4)`
  font-size: 17px;

  color: ${(props) => (props.color ? props.color : "lightyellow")};
  text-shadow: ${(props) =>
    props.shadowUnable ? "" : "black 0.1em 0.1em 0.2em"};

  span {
    color: lightblue;
  }

  @media (min-width: 500px) {
    font-size: 19px;
  }

  @media (min-width: 700px) {
    font-size: 22px;
  }
`;

export const MainDetailsContainer = styled(motion.section)`
  width: 99vw;

  background-color: ${(props) => props.bgcolor};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const MainDetails = styled(motion.div)`
  width: 90%;
  z-index: 1;

  /* border: 1px solid red; */

  @media (min-width: 500px) {
    width: 85%;
  }

  @media (min-width: 700px) {
    width: 90%;
    height: 500px;
  }

  @media (min-width: 900px) {
    width: 500px;
  }

  @media (min-width: 1000px) {
    width: 550px;
    height: 570px;
  }
`;

export const Image = styled(motion.img)`
  /* position: absolute; */
  /* z-index: 0; */

  width: ${(props) => (props.moon ? "250px" : "420px")};
  height: ${(props) => (props.moon ? "250px" : "240px")};

  @media (min-width: 500px) {
    width: ${(props) => (props.moon ? "280px" : "500px")};
    height: 300px;
  }

  @media (min-width: 700px) {
    width: ${(props) => (props.moon ? "280px" : "480px")};
    height: ${(props) => (props.moon ? "280px" : "270px")};
  }

  @media (min-width: 900px) {
    width: ${(props) => (props.moon ? "300px" : "440px")};
    height: ${(props) => (props.moon ? "300px" : "240px")};
  }

  @media (min-width: 1000px) {
    width: ${(props) => (props.moon ? "300px" : "460px")};
    height: ${(props) => (props.moon ? "300px" : "260px")};

    position: relative;
  }
`;

export const SquadDetails = styled.section`
  width: 99vw;

  height: 300px;
  /* border: 2px solid red; */
  background-color: #000;
`;
