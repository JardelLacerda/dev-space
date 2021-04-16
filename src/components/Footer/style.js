import styled from "styled-components";

export const FooterStyled = styled.div`
  width: 99vw;
  color: red;
  /* background-color: #000; */
  background: rgb(32, 32, 32);
  background: radial-gradient(
    circle,
    rgba(32, 32, 36, 6) 40%,
    rgba(0, 0, 5, 1) 80%,
    rgba(0, 0, 6, 1) 100%
  );
  border-top: 1px solid yellow;
  padding-left: 10%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (min-width: 900px) {
    flex-direction: row;
    padding-left: 0;
    justify-content: space-around;
  }
`;

export const CardFooter = styled.div`
  width: 260px;
  max-width: 320px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: white;

  @media (min-width: 500px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;

  color: white;
`;

export const LinkStyled = styled.a``;
