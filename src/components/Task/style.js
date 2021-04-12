import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragging ? "rgba(247, 217, 23, 0.3)" : "white"};

  .header_task {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    padding: 12px;
    margin: 0;
  }

  .MuiChip-root {
    margin: 2px;
  }
`;
