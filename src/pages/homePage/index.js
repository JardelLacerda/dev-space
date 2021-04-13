import Button from "../../components/Buttons";
import Header from "../../components/Header";
import {
  Division,
  LocationProjects,
  LocationTitle,
  MainContainer,
  Title,
  TitleTwo,
  Container,
} from "./styled";

import { useContext, useEffect } from "react";
import { ThemeContext } from "../../providers/theme";

import { ProjectTaks } from "../../providers/project-tasks";
import RequisitionNewProject from "../../servers/createProject";
import StandardModal from "../../components/Modal";
import { useHistory, useParams } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  const {
    myProjects,
    projectParticipants,
    myTasks,
    getProjects,
    getTasks,
  } = useContext(ProjectTaks);

  useEffect(() => {
    getProjects(id);
    getTasks(undefined, id);
  }, []);

  return (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <Header />
      <MainContainer>
        <Division>
          <LocationTitle>
            <Title theme={theme ? ThemeDark : ThemeLigth}>Meus Projetos</Title>

            <RequisitionNewProject />
          </LocationTitle>
          <LocationProjects theme={theme ? ThemeDark : ThemeLigth}>
            {myProjects?.map((pj, index) => {
              return (
                <p
                  key={index}
                  onClick={() => history.push(`/project/${pj.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {pj.title} {pj.id}
                </p>
              );
            })}

            {projectParticipants?.map((pj, index) => {
              return (
                <p
                  key={index}
                  onClick={() => history.push(`/project/${pj.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {pj.title} {pj.id}
                </p>
              );
            })}
          </LocationProjects>
        </Division>

        <Division>
          <LocationTitle>
            <TitleTwo theme={theme ? ThemeDark : ThemeLigth}>
              Minhas Tarefas
            </TitleTwo>
          </LocationTitle>
          <LocationProjects theme={theme ? ThemeDark : ThemeLigth}>
            {myTasks?.map((task, index) => {
              return (
                <p
                  key={index}
                  onClick={() => history.push(`/project/${task.project_id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {task.title} {task.id}
                </p>
              );
            })}
          </LocationProjects>
        </Division>
      </MainContainer>
    </Container>
  );
};

export default HomePage;
