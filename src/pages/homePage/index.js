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

import { useContext } from "react";
import { ThemeContext } from "../../providers/theme";

const HomePage = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  console.log("THEMA HOME PAGE - ", theme);
  return (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <Header />
      <MainContainer>
        <Division>
          <LocationTitle>
            <Title theme={theme ? ThemeDark : ThemeLigth}>Meus Projetos</Title>
            <Button nameBtn="Novo Projeto" />
          </LocationTitle>
          <LocationProjects theme={theme ? ThemeDark : ThemeLigth}>
            <h2>Meus Projetos</h2>
          </LocationProjects>
        </Division>

        <Division>
          <LocationTitle>
            <TitleTwo theme={theme ? ThemeDark : ThemeLigth}>
              Minhas Tarefas
            </TitleTwo>
          </LocationTitle>
          <LocationProjects theme={theme ? ThemeDark : ThemeLigth}>
            <h2>Minhas tarefas</h2>
          </LocationProjects>
        </Division>
      </MainContainer>
    </Container>
  );
};

export default HomePage;
