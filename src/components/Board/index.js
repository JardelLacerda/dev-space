import { useEffect, useState } from "react";
import Column from "../Column";
import { DragDropContext } from "react-beautiful-dnd";
import { Container } from "./style";

import { useContext } from "react";
import { ProjectTaks } from "../../providers/project-tasks";
import { useParams } from "react-router";

const Board = () => {
  const {
    usedProject,
    tasksProject,
    getTasksProject,
    getUsedProject,
    setUsedProject,
    actulyProject,
  } = useContext(ProjectTaks);

  const [loadProject, setLoadProject] = useState(true);

  const { id } = useParams();

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

    const start = usedProject.columns[source.droppableId];
    const finish = usedProject.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...usedProject,
        columns: { ...usedProject.columns, [newColumn.id]: newColumn },
      };

      actulyProject(newState, id);
      setUsedProject(newState);
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
      ...usedProject,
      columns: {
        ...usedProject.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    actulyProject(newState, id);
    setUsedProject(newState);
  };

  usedProject["tasks"] = tasksProject;
  const loadedProject = async () => {
    await Promise.all([getUsedProject(id), getTasksProject(id)]);
    setLoadProject(false);
  };

  useEffect(() => {
    loadedProject();
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {loadProject ? (
          <p>CARREGANDO</p>
        ) : (
          usedProject.columnsOrder.map((columnId) => {
            const column = usedProject.columns[columnId];
            const tasks = column?.taskIds.map((taskId) =>
              tasksProject.find(
                (task) => toString(task.id) === toString(taskId)
              )
            );
            return <Column key={column.id} column={column} tasks={tasks} />;
          })
        )}
      </Container>
    </DragDropContext>
  );
};

export default Board;
