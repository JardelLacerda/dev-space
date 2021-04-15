import styled from "styled-components";
import EarthView from "../../images/nasaEarthView.jpg";
import EarthAstronaut from "../../images/earthAndAstronaut.jpg";
import Colors from "../../global/Theme";

export const Container = styled.section`
  width: 98.8vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PrimaryTheme};
  /* overflow-x: hidden; */
`;

export const MainContainer = styled.main`
  width: 99vw;
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
  width: 99vw;

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

export const Presentation = styled.div`
  margin: 0 10px 0;
  opacity: 1;
  width: 80%;
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

export const Title = styled.h2`
  font-size: 22px;
  color: ${(props) => props.color};
  text-shadow: ${(props) =>
    props.shadowUnable ? "" : "black 0.1em 0.1em 0.2em"};

  @media (min-width: 500px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h4`
  font-size: 17px;

  color: lightyellow;
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

export const MainDetailsContainer = styled.section`
  width: 99vw;

  height: 600px;
  background-color: ${(props) => props.bgcolor};

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MainDetails = styled.div`
  position: relative;
  width: 300px;
  z-index: 1;

  @media (min-width: 500px) {
    width: 400px;
  }

  @media (min-width: 700px) {
    width: 600px;
    height: 500px;
  }
  @media (min-width: 1000px) {
    width: 500px;
    height: 570px;
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 0;

  width: ${(props) => (props.moon ? "300px" : "300px")};
  height: 200px;

  @media (min-width: 500px) {
    width: ${(props) => (props.moon ? "600px" : "500px")};
    height: 400px;
  }

  @media (min-width: 700px) {
    width: ${(props) => (props.moon ? "500px" : "500px")};
    height: ${(props) => (props.moon ? "400px" : "500px")};

    width: 600px;
  }

  @media (min-width: 1000px) {
    width: ${(props) => (props.moon ? "480px" : "480px")};
    height: ${(props) => (props.moon ? "350px" : "440px")};

    position: relative;
  }
`;

export const SquadDetails = styled.section`
  width: 99vw;

  height: 650px;
  /* border: 2px solid red; */
  background-color: palegreen;
`;
