import styled from "styled-components";

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  min-width: 238px;
  display: flex;
  flex-direction: column;
  width: calc((100% - 96px) / 6);
`;

export const Title = styled.h3`
  padding: 8px;
`;

export const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.5s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "lightgrey" : "white"};
  flex-grow: 1;
`;
