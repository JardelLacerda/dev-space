import { createContext, useEffect, useContext, useState } from "react";
import { LoginContext } from "../login";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProjectTaks = createContext({});

const ProjectTasksProvider = ({ children }) => {
  const { user_id, token } = useContext(LoginContext);

  const [loadTask, setLoadTask] = useState(false);
  const [loadProject, setLoadProject] = useState(false);

  const [projects, setProjects] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const [projectParticipants, setProjectParticipants] = useState([]);
  const [usedProject, setUsedProject] = useState({});

  const [tasksProject, setTasksProject] = useState([]);
  const [myTasks, setMyTasks] = useState([]);

  const getProjects = async (idUser) => {
    await axios
      .get(`https://dev-space-json-server.herokuapp.com/project/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (resp) => {
        setProjects(resp.data);

        setUsedProject(
          resp.data.find((pj) => {
            return Number(idUser) === Number(pj.id);
          })
        );

        setMyProjects(
          resp.data.filter((project) => {
            return Number(project.userId) === Number(idUser);
          })
        );

        setProjectParticipants(
          resp.data.filter((project) => {
            if (project.participants.includes(Number(idUser))) {
              return project;
            }
          })
        );
      })
      .then(() => {
        setLoadProject(true);
      });
  };

  const getTasks = async (idProject, idUser) => {
    await axios
      .get("https://dev-space-json-server.herokuapp.com/tasks/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setTasksProject(
          resp.data.filter((task) => {
            if (Number(task.project_id) === Number(idProject)) {
              task.id = `${task.id}`;
              task.project_id = `${task.project_id}`;
              return task;
            }
          })
        );

        setMyTasks(
          resp.data.filter((task) => {
            if (task.participants.includes(Number(idUser))) {
              return task;
            }
          })
        );
      })
      .then(() => {
        setLoadTask(true);
      });
  };

  return (
    <ProjectTaks.Provider
      value={{
        projects,
        myProjects,
        projectParticipants,
        usedProject,
        tasksProject,
        myTasks,
        loadProject,
        loadTask,
        getProjects,
        getTasks,
      }}
    >
      {children}
    </ProjectTaks.Provider>
  );
};

export default ProjectTasksProvider;
