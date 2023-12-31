import styled from "styled-components";
import Rocket from "../../images/rocket.png";
import { Card } from "@material-ui/core";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PrimaryTheme};
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1000px) {
    //background-image: url(${Rocket});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Division = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px 0;
  max-width: 400px;
`;

export const LocationTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0 0px 0;
  height: 80px;
`;

export const Title = styled.h2`
  font-size: 20px;
  width: 100px;
  text-align: center;
  color: ${({ theme }) => theme.Details};
  @media (min-width: 500px) {
    width: auto;
  }
`;

export const TitleTwo = styled(Title)`
  color: ${({ theme }) => theme.Details};
  width: auto;
`;

export const LocationProjects = styled.div`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  color: ${({ theme }) => theme.SecundaryColor};
`;

export const CardProjects = styled(Card)`
  && {
    background-color: #f7cc31;
  }
  text-transform: uppercase;
  padding: 1em;
`;
