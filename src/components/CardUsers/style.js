import styled from "styled-components";
import { Card, Avatar } from "@material-ui/core";

export const CardContainer = styled.div`
  width: 80%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const CardUser = styled(Card)`
  width: ${(props) =>
    props.medium ? "180px" : props.large ? "200px" : "140px"};

  height: ${(props) =>
    props.medium ? "200px" : props.large ? "220px" : "160px"};
  margin: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarStyled = styled(Avatar)`
  margin: 10px;
  && {
    width: ${(props) =>
      props.medium ? "80px" : props.large ? "100px" : "60px"};
    height: ${(props) =>
      props.medium ? "80px" : props.large ? "100px" : "60px"};
  }
`;

export const Name = styled.p`
  border: 1px solid;
  width: 80%;
  height: 30px;
  text-align: center;
  font-size: 20px;
`;
