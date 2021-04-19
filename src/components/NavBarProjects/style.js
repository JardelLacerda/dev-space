import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  background-color: #444;
  height: 70px;

  margin: 0 auto;
  padding: 10px 0 10px 0;
  border-bottom: 2px solid #f7d917;

  @media (min-width: 700px) {
    height: 40px;
  }
  nav {
    /* max-width: 1920px; */
    width: auto;
    margin: 0 auto;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 32px;
    box-sizing: border-box;
  }

  h2 {
    color: #f7d917;
    margin-right: 16px;
  }

  Button {
    color: #f7d917;
    margin: 0 16px;

    @media (min-width: 700px) {
      font-size: 15px;
    }
  }

  Button:hover {
    background-color: rgba(247, 217, 23, 0.1);
  }
`;

export const DivAvatar = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
`;
