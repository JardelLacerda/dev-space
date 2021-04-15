import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProjectTaks } from "../../providers/project-tasks";
import { ThemeContext } from "../../providers/theme";
import {
  ButtonsCard,
  CardPadrao,
  Container,
  ContainerParticipants,
  ContentCard,
  IconLink,
  LocationCardsInfo,
  MainContainer,
  MiniCardTec,
  SubTitle,
  Title,
  UserCard,
} from "./styled";

import IconGitlab from "../../images/icons/gitLab.png";
import IconGitHub from "../../images/icons/gitHub.png";
import IconFigma from "../../images/icons/figma.png";
import IconUser from "../../images/icons/user.png";

const Information = () => {
  const { id } = useParams();
  const [loadedInfos, setLoadedInfos] = useState(true);

  const { theme, ThemeDark, ThemeLigth } = useContext(ThemeContext);

  const { getUsedProject, usedProject } = useContext(ProjectTaks);

  const {
    //description,
    //participants,
    //repository,
    //technology,
    title,
    accumulated_time,
  } = usedProject;

  const description = "Sou um texto de descrição para testar a descrição ";
  const technology = [
    { title: "React", link: null },
    { title: "CSS3", link: null },
    { title: "JavaCript", link: null },
    { title: "Html5", link: null },
    { title: "Python", link: null },
  ];

  const participants = [1, 2, 3, 4];

  const repository = [
    { title: "Gitlab", link: null },
    { title: "GitHub", link: null },
    { title: "Miro", link: null },
    { title: "Figma", link: null },
  ];

  const loadedProject = async () => {
    await getUsedProject(id);
    setLoadedInfos(false);
  };

  const ColorRandon = () => {
    const CorlorsCard = [
      "#191308",
      "#454B66",
      "#9CA3DB",
      "#9883E5",
      "#50C9CE",
      "#FCD3DE",
      "#2176FF",
      "#F79824",
      "#3D0814",
      "#006C67",
    ];

    return CorlorsCard[Math.floor(Math.random() * 10)];
  };

  useEffect(() => {
    loadedProject();
  }, []);

  return loadedInfos ? (
    <p>Carregando suas informaçoes</p>
  ) : (
    <Container theme={theme ? ThemeDark : ThemeLigth}>
      <MainContainer>
        <Title>{title}</Title>
        <SubTitle>Tempo total do projeto: {accumulated_time}</SubTitle>

        <LocationCardsInfo>
          <CardPadrao>
            <h2>
              <span>?</span>Descrição<span>?</span>
            </h2>
            <ContentCard>
              <p>{description}</p>
            </ContentCard>
            <ButtonsCard>
              <button>EDIT</button>
            </ButtonsCard>
          </CardPadrao>

          <CardPadrao>
            <h2>
              <span>{`{`}</span>Tecnologias<span>{`}`}</span>
            </h2>
            <ContentCard>
              {technology.map((tec, index) => {
                return (
                  <MiniCardTec key={index} coloration={ColorRandon()}>
                    <h4>{tec.title}</h4>
                  </MiniCardTec>
                );
              })}
            </ContentCard>
            <ButtonsCard>
              <button>ADD</button>
              <button>REMOVE</button>
            </ButtonsCard>
          </CardPadrao>

          <CardPadrao>
            <h2>
              <span>-</span>Links Uteis<span>-</span>
            </h2>
            <ContentCard>
              {repository.map((rep, index) => {
                return (
                  <a className="Icons" key={index}>
                    {rep.title === "Gitlab" ? (
                      <IconLink src={IconGitlab} />
                    ) : rep.title === "GitHub" ? (
                      <IconLink src={IconGitHub} />
                    ) : rep.title === "Figma" ? (
                      <IconLink src={IconFigma} />
                    ) : (
                      <p>{rep.title}</p>
                    )}
                  </a>
                );
              })}
            </ContentCard>
            <ButtonsCard>
              <button>ADD</button>
              <button>REMOVE</button>
            </ButtonsCard>
          </CardPadrao>
        </LocationCardsInfo>

        <ContainerParticipants>
          {participants.map((part, index) => {
            return <UserCard key={index}>{part}</UserCard>;
          })}
        </ContainerParticipants>
      </MainContainer>
    </Container>
  );
};

export default Information;
