import styled from "styled-components";
import Rocket from "../../images/rocket.png";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PrimaryTheme};
`;

export const ContainerMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.PrimaryTheme};
  display: flex;
  flex-direction: column;
  background-image: url(${Rocket});
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 700px) {
    background-position: center right 100px;
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    margin: 0 auto;
    background-position: center right 150px;
  }
`;

export const ContainerInfo = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify: center;
  @media (min-width: 700px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.SecundaryTheme};
  margin: 0;
  font-weight: 800;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.TextColor};
  margin: 0 10px;
  font-weight: 300;
  font-style: italic;
`;

export const Description = styled.p`
  display: none;
  color: ${({ theme }) => theme.SecundaryTheme};
  @media (min-width: 700px) {
    display: block;
    margin: 80px 0 0 0;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .MuiButtonBase-root {
    margin: 50px 0;
  }

  @media (min-width: 700px) {
    height: auto;
    flex-direction: row;
    justify-content: flex-start;
    .MuiButtonBase-root {
      margin-right: 50px;
    }
  }
`;
