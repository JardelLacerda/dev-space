import { Droppable } from "react-beautiful-dnd";
import ButtonAddTask from "../ButtonAddTask";
import Task from "../Task";
import { Container, Title, TaskList } from "./style";

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => {
          return (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>

      <ButtonAddTask />
    </Container>
  );
};

export default Column;
