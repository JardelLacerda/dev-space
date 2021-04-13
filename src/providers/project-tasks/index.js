import { createContext, useEffect, useContext, useState } from "react";
import { LoginContext } from "../login";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProjectTaks = createContext({});

const ProjectTasksProvider = ({ children }) => {
  const { user_id, token } = useContext(LoginContext);

  const [id, setId] = useState();

  const [project, setProject] = useState({
    projects: [],
    myProjects: [],
    projectParticipants: [],
    usedProject: [],
  });

  const [tasks, setTasks] = useState({
    taskProject: [],
    myTask: [],
  });

  const getProjects = async (idUser) => {
    await axios
      .get(`https://dev-space-json-server.herokuapp.com/project/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (resp) => {
        setProject({
          projects: resp.data,
          myProjects: resp.data.filter((project) => {
            return Number(project.userId) === Number(idUser);
          }),

          projectParticipants: resp.data.filter((project) => {
            if (project.participants.includes(Number(idUser))) {
              return project;
            }
          }),
          usedProject: resp.data.find((pj) => {
            return Number(idUser) === Number(pj.id);
          }),
        });
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
        setTasks({
          taskProject:
            idProject !== undefined &&
            resp.data.filter((task) => {
              if (task.participants.includes(Number(idProject))) {
                return task;
              }
            }),
          myTask:
            idUser !== undefined &&
            resp.data.filter((task) => {
              if (task.participants.includes(Number(idUser))) {
                return task;
              }
            }),
        });
      });
  };

  const FilterAlgo = () => {
    console.log(project.usedProject);
  };

  return (
    <ProjectTaks.Provider
      value={{ project, tasks, getProjects, getTasks, FilterAlgo }}
    >
      {children}
    </ProjectTaks.Provider>
  );
};

export default ProjectTasksProvider;
