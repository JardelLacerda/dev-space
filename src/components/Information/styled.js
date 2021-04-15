import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PrimaryTheme};
  margin: 0;
  padding: 30px 0 0 0;
`;

export const MainContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: white;
  margin: 0;
  text-align: center;
`;

export const SubTitle = styled.h4`
  color: yellow;
  margin: 0;
  text-align: center;
`;

export const LocationCardsInfo = styled.section`
  margin: 30px auto;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const CardPadrao = styled.section`
  background-color: white;
  border: solid 3px #c4c4c4;
  width: 300px;
  height: 350px;
  border-radius: 10px;

  h2 {
    color: black;
    text-align: center;
    text-transform: uppercase;
  }

  span {
    color: #add8e6;
  }

  p {
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
`;

export const ContentCard = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 210px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  a.Icons {
    width: 40%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;

export const ButtonsCard = styled.div`
  width: 100%;
  max-height: 40px;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-around;
`;

export const MiniCardTec = styled.div`
  width: 40%;
  height: 50px;
  background-color: ${({ coloration }) => coloration};
  margin: 10px 0;
  cursor: pointer;
  h4 {
    margin: 12px 0;
    color: white;
    text-align: center;
  }
`;

export const IconLink = styled.img`
  margin: 0 auto;
  height: 100%;
  cursor: pointer;
`;

export const ContainerParticipants = styled.section`
  width: 95%;
  margin: 0 auto;
  min-height: 200px;
  background-color: white;
  border: solid 4px #c4c4c4;
  border-radius: 10px;
  display: flex;
`;

export const UserCard = styled.div`
  height: 150px;
  width: 100px;
  border: solid 4px #c4c4c4;
`;
