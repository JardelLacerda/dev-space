import { createContext, useContext, useState } from "react";
import { LoginContext } from "../login";

import axios from "axios";

export const ProjectTaks = createContext({});

const ProjectTasksProvider = ({ children }) => {
  const { token, user_id } = useContext(LoginContext);

  const [myProjects, setMyProjects] = useState([]);
  const [projectParticipants, setProjectParticipants] = useState([]);
  const [usedProject, setUsedProject] = useState({});
  const [userInfos, setUserInfos] = useState({});
  const [tasksProject, setTasksProject] = useState([]);
  const [myTasks, setMyTasks] = useState([]);

  const getUsedProject = async (idUser) => {
    await axios
      .get(`https://dev-space-json-server.herokuapp.com/project?id=${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setUsedProject(resp.data[0]);
      });
  };

  const getMyProjects = async (idUser) => {
    await axios
      .get(
        `https://dev-space-json-server.herokuapp.com/project?userId=${idUser}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log("MY PROJECTS", resp.data);
        setMyProjects(resp.data);
      });
  };

  const getProjectParticipant = async (idUser) => {
    await axios
      .get(`https://dev-space-json-server.herokuapp.com/project`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setProjectParticipants(
          resp.data.filter((project) => {
            if (project.participants.includes(Number(idUser))) {
              return project;
            }
          })
        );
      });
  };

  const getTasks = async (idUser) => {
    await axios
      .get("https://dev-space-json-server.herokuapp.com/tasks/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data, "GET TASKS");
        setMyTasks(
          resp.data.filter((task) => {
            if (task.participants.includes(Number(idUser))) {
              return task;
            }
          })
        );
      });
  };

  const getTasksProject = async (idProject) => {
    await axios
      .get(
        `https://dev-space-json-server.herokuapp.com/tasks?project_id=${idProject}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        setTasksProject(
          resp.data.map((task) => {
            task.id = `${task.id}`;
            return task;
          })
        );
      });
  };

  const ProfileInfo = async (idUser) => {
    await axios
      .get(`https://dev-space-json-server.herokuapp.com/users/${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        setUserInfos(resp.data);
      });
  };

  const profileEdit = async (idUser, data) => {
    await axios
      .patch(
        `https://dev-space-json-server.herokuapp.com/users/${idUser}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        ProfileInfo(idUser);

        console.log(resp);
      });
  };

  const actulyProject = async (data, id) => {
    await axios.patch(
      `https://dev-space-json-server.herokuapp.com/project/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  /*PAGINA DE INFORMAÇÕES */

  return (
    <ProjectTaks.Provider
      value={{
        myProjects,
        projectParticipants,
        usedProject,
        tasksProject,
        myTasks,
        userInfos,
        setTasksProject,
        actulyProject,
        setUsedProject,
        getMyProjects,
        getUsedProject,
        getProjectParticipant,
        getTasksProject,
        getTasks,
        ProfileInfo,
        profileEdit,
      }}
    >
      {children}
    </ProjectTaks.Provider>
  );
};

export default ProjectTasksProvider;
