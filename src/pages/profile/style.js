import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
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
  width: 30vw;
  height: 60vh;
`;
export const UserInfo = styled.div`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  border-radius: 10px;
  height: 95%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;
export const EditInfo = styled.div`
  width: 30vw;
  height: 60vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;

export const ProfileImage = styled.div`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  border-radius: 10px;
  height: 10vh;
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  justify-content: space-around;
  img {
    width: 37px;
    margin-left: 10px;
    margin: 0;
  }
  padding: 2px;
`;

export const PersonalInfo = styled.div`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  border-radius: 10px;

  height: 40vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;
export const PersonalInfoEdit = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const ApiText = styled.span`
  background-color: ${({ theme }) => theme.SecundaryTheme};
  font-weight: 200 !important;
  border-radius: 2px;
`;
export const Config = styled.div`
  color: ${({ theme }) => theme.Details};
  font-weight: bolder;
`;
