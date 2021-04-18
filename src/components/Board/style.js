import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 8px;
  overflow-x: auto;
  overflow-y: auto;
  width: 98%;
  margin: 0 auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }
`;
