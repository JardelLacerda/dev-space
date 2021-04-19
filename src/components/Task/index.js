import { Draggable } from "react-beautiful-dnd";
import Timer from "../Timer";
import { Container } from "./style";
//import { Chip } from "@material-ui/core";
import ListAvatar from "../ListAvatar";
import DelTask from "../deleteTask";

const Task = ({ task, index, column }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <div className="header_task">
              <DelTask taskId={task.id} column={column} />
              <ListAvatar participants={task.participants} />

              <Timer
                play_timer={task.timer.play}
                initial_time={task.timer.initial_time}
                count_time={task.timer.count_time}
                task={task}
              />
            </div>

            <h3>{task.title} </h3>
          </Container>
        );
      }}
    </Draggable>
  );
};

export default Task;

/*
{task.tags.map((tag, index) => (
              <Chip key={index} label={tag} variant="outlined" size="small" />
            ))}

*/
