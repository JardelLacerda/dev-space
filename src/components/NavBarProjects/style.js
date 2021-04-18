import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  /* background-color: #444; */
  background: rgb(94, 94, 94);
  background: radial-gradient(
    circle,
    rgba(94, 94, 94, 1) 0%,
    rgba(0, 0, 6, 1) 100%,
    rgba(0, 0, 6, 1) 100%
  );
  /* height: 70px; */
  margin: 0 auto;
  border-bottom: 2px solid #f7d917;

  nav {
    /* max-width: 1920px; */
    width: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
      font-size: 17px;
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
