/**
 !----------- IMPORTANTE
  * <RequisitionNewProject/>:
    Abre um Modal que pode ser mudado para ícone clicável. 
    Ver a documentação no componente Modal ou Buttons.

    Exemplo:
            <RequisitionNewProject isIcon={true} />

          O botão se torna um ícone que pode ser clicável

 */

import Header from "../../components/Header";
import {
  Division,
  LocationProjects,
  LocationTitle,
  MainContainer,
  Title,
  TitleTwo,
  Container,
  Element,
  CardProjects,
} from "./styled";

import { useContext, useEffect } from "react";
import { ThemeContext } from "../../providers/theme";

import { ProjectTaks } from "../../providers/project-tasks";
import RequisitionNewProject from "../../servers/createProject";
import { useHistory, useParams } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  const {
    myProjects,
    projectParticipants,
    myTasks,
    getMyProjects,
    getProjectParticipant,
    getTasks,
  } = useContext(ProjectTaks);

  useEffect(() => {
    getMyProjects(id);
    getProjectParticipant(id);
    getTasks(id);
  }, []);

  return (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <Header />
      <MainContainer>
        <Division>
          <LocationTitle>
            <Title theme={theme ? ThemeDark : ThemeLigth}>Meus Projetos</Title>

            <RequisitionNewProject isIcon={false} />
          </LocationTitle>
          <LocationProjects theme={theme ? ThemeDark : ThemeLigth}>
            {myProjects?.map((pj, index) => {
              return (
                <CardProjects
                  key={index}
                  onClick={() => history.push(`/project/${pj.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {pj.title}
                  {/* {pj.id} */}
                </CardProjects>
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
      </MainContainer>
    </Container>
  );
};

export default HomePage;
