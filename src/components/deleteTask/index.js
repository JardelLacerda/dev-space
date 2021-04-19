import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../providers/login";
import { ProjectTaks } from "../../providers/project-tasks";
import { useParams } from "react-router-dom";
import { HighlightOffStyled } from "./style";

const DelTask = ({ taskId, column }) => {
  const { token } = useContext(LoginContext);
  const { usedProject, getUsedProject } = useContext(ProjectTaks);
  const { id } = useParams();

  const deleteTask = () => {
    let data = usedProject;

    data.columns[column.id].taskIds = data.columns[column.id].taskIds.filter(
      (task) => {
        return task !== taskId;
      }
    );

    axios
      .patch(
        `https://dev-space-json-server.herokuapp.com/project/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        getUsedProject(id);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    axios
      .delete(`https://dev-space-json-server.herokuapp.com/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        deleteTask();
      })
      .catch((err) => console.log(err));
  };
  return <HighlightOffStyled onClick={() => handleClick()} />;
};

export default DelTask;
