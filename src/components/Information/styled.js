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
  color: ${({ theme }) => theme.TextColor};
  margin: 0;
  text-align: center;
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.Details};
  margin: 0;
  text-align: center;
`;

export const LocationCardsInfo = styled.section`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const CardPadrao = styled.section`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  border: solid 3px #c4c4c4;
  width: 280px;
  height: 350px;
  border-radius: 10px;
  margin: 20px auto;

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
    position: relative;
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
  position: relative;
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

export const RemoveItem = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 5px;
  right: 5px;
  color: red;
  cursor: pointer;
`;
