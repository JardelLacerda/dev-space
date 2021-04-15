import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import {
  Container,
  PresentationContainer,
  Presentation,
  MainContainer,
  MainDetailsContainer,
  MainDetails,
  SquadDetails,
  Title,
  SubTitle,
  Image,
} from "./style";

import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ThemeContext } from "../../providers/theme";

import Astronaut2 from "../../images/astronaut2.jpeg";
import Moon from "../../images/moon.jpg";
import Moon3 from "../../images/moon3.jpg";
import CardUsers from "../../components/CardUsers";

const About = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  const history = useHistory();

  return (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <Header />
      <MainContainer>
        <PresentationContainer>
          <Presentation>
            <Title color="yellow">
              Dev, você está pronto para embarcar no próximo estágio de
              produtividade?
            </Title>
            <SubTitle>
              Venha conhecer a ferramenta que irá {""}
              <span>simplificar</span> sua vida.
            </SubTitle>
            <Buttons
              onClick={() => history.push("/about")}
              nameBtn="COMO ASSIM ?"
            />
          </Presentation>
        </PresentationContainer>

        <MainDetailsContainer bgcolor="#000">
          <Image src={Astronaut2} />

          <MainDetails>
            <Title color="lightblue">AUTONOMIA</Title>
            <SubTitle>
              Sabe quando você se sente preso àquela nova ferramenta de
              organização de projetos e precisa de muito tempo de adaptação até
              começar a codar?
            </SubTitle>
            <SubTitle>
              Com DevSpace você volta a ser dono do seu próprio espaço de
              trabalho.
            </SubTitle>

            <Title color="lightblue">PRATICIDADE</Title>

            <SubTitle>
              Não precisa se preocupar com inúmeras configurações iniciais para
              iniciar um simples projeto.
            </SubTitle>
          </MainDetails>
        </MainDetailsContainer>

        <MainDetailsContainer bgcolor="#2A2B2D">
          <MainDetails>
            <Title shadowUnable color="#ff6060">
              PRODUTIVIDADE
            </Title>
            <SubTitle shadowUnable>
              Estamos na contagem regressiva do lançamento da sua nova ideia!
            </SubTitle>
            <SubTitle shadowUnable>
              Desenvolvemos uma aplicação que armazena as horas de trabalho por
              atividade para que você e sua equipe possam metrificar o
              desempenho.
            </SubTitle>

            <Title shadowUnable color="#ff6060">
              INSPIRAÇÃO
            </Title>

            <SubTitle shadowUnable>
              Nos inspiramos em uma das plataformas de Kanbans mais conhecidas
              do mundo para que você tenha o melhor do antigo com apenas o
              necessário para o seu trabalho.
            </SubTitle>
          </MainDetails>

          <Image moon src={Moon3} />
        </MainDetailsContainer>
        <SquadDetails></SquadDetails>
      </MainContainer>
    </Container>
  );
};

export default About;
