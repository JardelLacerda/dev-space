import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PrimaryTheme};
  display: flex;
  flex-flow: row-reverse wrap;
  align-items: center;
  justify-content: space-around;
  img {
    width: 79px;
    border-radius: 10px;
    margin: 0 auto;
  }
  span {
    padding: 4px;
    font-weight: bolder;
    margin-left: 3px;
  }
`;

export const Info = styled.div`
  flex-basis: 370px;
  height: 500px;
  /* min-height: 100vh; */
  border: 1px solid red;
  margin-top: 20px;

  img {
    width: 140px;

    @media (min-width: 700px) {
      width: 180px;
    }

    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 779px) {
    margin-bottom: 0;
  }
`;

export const UserInfo = styled.div`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  border-radius: 10px;
  padding: 5%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

export const EditInfo = styled.div`
  width: 90%;
  flex-basis: 370px;
  height: 480px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  button {
    display: inline-block;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column;
  height: 140px;

  width: 98%;

  background-color: ${({ theme }) => theme.SecundaryTheme};
  border-radius: 10px;
  /* height: 20%; */
  img {
    width: 80px;
    margin-left: 10px;
    margin: 0;

    :hover {
      cursor: pointer;
    }
  }
  padding: 2px;
`;

export const DivAvatar = styled.div``;

// export const ImageAvatar = styled.img`
//   width: 300px;
//   height: 200px;
// `;

export const PersonalInfo = styled.div`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  border-radius: 10px;
  height: 58%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;

  input {
    border: none;
    font-family: "Roboto Mono", monospace;
  }
`;

export const Config = styled.div`
  color: ${({ theme }) => theme.Details};
  font-weight: bolder;
  font-size: 17px;
  height: 10%;

  @media (min-width: 700px) {
    font-size: 22px;
  }
`;

export const Div = styled.div`
  padding: 2px 10px 2px 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const ApiText = styled.span`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  font-weight: 200 !important;
  border-radius: 2px;
  display: flex;
  /* width: 200px; */
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const DivIcon = styled.div`
  padding: 0 5px 0 5px;
  :hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: none;
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 16px;
`;
