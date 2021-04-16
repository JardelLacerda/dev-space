import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import {
  Container,
  PresentationContainer,
  Presentation,
  MainContainer,
  MainDetailsContainer,
  MainDetails,
  Title,
  SubTitle,
  Image,
} from "./style";

import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ThemeContext } from "../../providers/theme";

import Astronaut2 from "../../images/astronaut2.jpeg";
import Moon from "../../images/moon-removebg.png";
import Earth from "../../images/earth.png";

import CardUsers from "../../components/CardUsers";
import Footer from "../../components/Footer";

const About = () => {
  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);
  const history = useHistory();

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <Header />
      <MainContainer>
        <PresentationContainer>
          <Presentation
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <Title firstTitle color="yellow">
              Dev, você está pronto para embarcar no próximo estágio de
              produtividade?
            </Title>
            <SubTitle firstText>
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
          <Image
            moon
            src={Moon}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 100, repeat: Infinity }}
          />

          <MainDetails>
            <Title shadowUnable color="lightblue">
              AUTONOMIA
            </Title>
            <SubTitle color="white" shadowUnable>
              Sabe quando você se sente preso àquela nova ferramenta de
              organização de projetos e precisa de muito tempo de adaptação até
              começar a codar?
            </SubTitle>
            <SubTitle color="white" shadowUnable>
              Com DevSpace você volta a ser dono do seu próprio espaço de
              trabalho.
            </SubTitle>

            <Title shadowUnable color="lightblue">
              PRATICIDADE
            </Title>

            <SubTitle color="white" shadowUnable>
              Não precisa se preocupar com inúmeras configurações iniciais para
              iniciar um simples projeto.
            </SubTitle>
          </MainDetails>
        </MainDetailsContainer>

        <MainDetailsContainer>
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

          <Image
            src={Earth}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 100, repeat: Infinity }}
          />
        </MainDetailsContainer>
        <Footer></Footer>
      </MainContainer>
    </Container>
  );
};

export default About;
