import Button from "../../components/Buttons";
import Header from "../../components/Header";
import {
  Division,
  LocationProjects,
  LocationTitle,
  MainContainer,
  Title,
  TitleTwo,
} from "./styled";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Division>
          <LocationTitle>
            <Title>Meus Projetos</Title>
            <Button nameBtn="Novo Projeto" />
          </LocationTitle>
          <LocationProjects>
            <h2>Meus Projetos</h2>
          </LocationProjects>
        </Division>

        <Division>
          <LocationTitle>
            <TitleTwo>Minhas Tarefas</TitleTwo>
          </LocationTitle>
          <LocationProjects>
            <h2>Minhas tarefas</h2>
          </LocationProjects>
        </Division>
      </MainContainer>
    </>
  );
};

export default HomePage;
