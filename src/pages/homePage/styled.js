import styled from "styled-components";
import Colors from "../../global/Colors";
import Rocket from "../../images/rocket.png";

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1000px) {
    background-image: url(${Rocket});
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
  color: ${Colors.BasicYellow};
  @media (min-width: 500px) {
    width: auto;
  }
`;

export const TitleTwo = styled(Title)`
  width: auto;
`;

export const LocationProjects = styled.div`
  background-color: ${Colors.BasicWhite};
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
