import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #444;
  height: 70px;
  margin: 0 auto;
  border-bottom: 2px solid #f7d917;

  nav {
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 32px;
    box-sizing: border-box;
  }

  nav div {
    display: flex;
  }

  h2 {
    color: #f7d917;
    margin-right: 16px;
  }

  Button {
    color: #f7d917;
    margin: 0 16px;
  }

  Button:hover {
    background-color: rgba(247, 217, 23, 0.1);
  }
`;
