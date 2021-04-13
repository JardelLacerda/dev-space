import { useEffect, useState } from "react";
import initialData from "./initial-data";
import Column from "../Column";
import { DragDropContext } from "react-beautiful-dnd";
import { Container } from "./style";

import { useContext } from "react";
import { LoginContext } from "../../providers/login";
import { ProjectTaks } from "../../providers/project-tasks";
import { useParams } from "react-router";

const Board = () => {
  const { token } = useContext(LoginContext);
  const {
    loadProject,
    usedProject,
    tasksProject,
    loadTask,
    getTasks,
    getProjects,
  } = useContext(ProjectTaks);

  //const { columnsOrder, columns } = usedProject;

  const { id } = useParams();
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    // console.log(start);

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: { ...data.columns, [newColumn.id]: newColumn },
      };

      setData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
  };

  useEffect(() => {
    getTasks(id, undefined);
    getProjects(id);
  }, []);

  //console.log(usedProject);
  //console.log(tasksProject);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {loadProject &&
          loadTask &&
          usedProject.columnsOrder.map((columnId) => {
            const column = usedProject.columns[columnId];
            const tasks = column?.taskIds.map((taskId) => {
              const taskTest = tasksProject?.find((task) => task.id === taskId);

              return taskTest;
            });
            //console.log(column.id, column, tasks);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
      </Container>
    </DragDropContext>
  );
};

export default Board;

/*
{loadProject &&
          usedProject.columnsOrder.map((columnId) => {
            const column = usedProject.columns[columnId];
            const tasks = column.taskIds.map((taskId) =>
              tasksProject?.find((task) => task.id === taskId)
            );
            return <Column key={} column={column} tasks={tasks} />;
          })}

 */
